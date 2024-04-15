import { useState, useEffect } from "react";

const Info = () => {
	const [name, setName] = useState("");
	const [nickname, setNickname] = useState("");

	/**
	 * 배열 존재: 마운트 된 후 실행
	 * 배열에 값 존재: 값이 업데이트 된 후 실행
	 * 리턴값 존재: 언마운트 직전 and 업데이트 직전에 실행
	 */
	useEffect(() => {
		console.log("effect");
		console.log(name);
		return () => {
			console.log("cleanup");
			console.log(name);
		};
	}, [name]);

	const onChangeName = (e) => {
		setName(e.target.value);
	};

	const onChangeNickname = (e) => {
		setNickname(e.target.value);
	};

	return (
		<div>
			<div>
				<input value={name} onChange={onChangeName} />
				<input value={nickname} onChange={onChangeNickname} />
			</div>
			<div>
				<b>이름:</b> {name}
			</div>
			<div>
				<b>닉네임:</b> {nickname}
			</div>
		</div>
	);
};

export default Info;
