import { useState, useEffect } from "react";
import axios from "axios";

export function useFetch(url, options = {}) {
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [data, setData] = useState();

	useEffect(() => {
		setData(undefined);
		setIsLoading(true);
		setIsError(false);
		const controller = new AbortController();

		// This is the Fetch API way to fetch data
		/* fetch(url, { ...options, signal: controller.signal })
			.then((res) => {
				if (!(res.status >= 200 && res.status <= 299))
					return Promise.reject(res)
				return res.json()
			})
			.then(setData)
			.catch((e) => {
				if (e?.name === "AbortError") return
				setIsError(true)
			})
			.finally(() => {
				if (controller.signal.aborted) return
				setIsLoading(false)
			}) */

		// This is the Axios way to fetch data
		axios({
			url,
			...options,
			signal: controller.signal,
		})
			.then((res) => setData(res.data))
			.catch((e) => {
				if (e?.name === "CanceledError") return;
				setIsError(true);
			})
			.finally(() => {
				if (controller.signal.aborted) return;
				setIsLoading(false);
			});

		return () => {
			controller.abort();
		};
	}, [url]);

	return { data, isLoading, isError };
}
