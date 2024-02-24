import { InputGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useUpdateCompletedSectionMutation } from "../slices/usersSlice";
import { setCredentials } from "../slices/authSlice";

const CompletedCheckbox = ({ sectionIdentifier }) => {
	const [checked, setChecked] = useState(false);
	const { sectionId, sectionKey } = useParams();
	const dispatch = useDispatch();

	const { userInfo } = useSelector((state) => state.auth);
	const [updateCompleted] = useUpdateCompletedSectionMutation();
	//why is it sometimes userInfo.data.completed and sometimes userInfo.completed? unwrap()!!!!!
	useEffect(() => {
		const alreadyCompletedSection = userInfo?.completed?.find((section) => {
			if (sectionId && sectionId === section.sectionId) {
				return section;
			} else if (sectionKey && `quiz/${sectionKey}` === section.sectionKey) {
				console.log(sectionKey, section, "sectionKey and section");
				return section;
			}
		});

		console.log(alreadyCompletedSection, "alreadyCompletedSectoin");
		if (alreadyCompletedSection && alreadyCompletedSection.completed) {
			console.log("inside useEffect");
			setChecked(alreadyCompletedSection.completed);
		} else {
			setChecked(false);
		}
	}, [sectionIdentifier]);

	const setCheckedHandler = async (checked, sectionId, sectionKey) => {
		try {
			const res = await updateCompleted({
				sectionId,
				sectionKey,
				checked,
			}).unwrap(); //unwarp gets rid of the nesting user information inside date prop in userInfo
			dispatch(setCredentials({ ...res }));
		} catch (error) {
			console.log(error, "there was a big fat error");
		}
		setChecked((checked) => !checked);
	};

	//create a new slice in userSlice?
	//when the page loads, check userInfo
	return (
		<InputGroup className="mb-3">
			<InputGroup.Text>Mark as completed</InputGroup.Text>
			<InputGroup.Checkbox
				checked={checked}
				className="completed-checkbox"
				aria-label="Checkbox for completed section"
				onChange={() => setCheckedHandler(checked, sectionId, sectionKey)}
			/>
		</InputGroup>
	);
};

export default CompletedCheckbox;
