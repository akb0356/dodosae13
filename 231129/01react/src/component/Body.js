import { useState } from "react";

function Body() {
  const [name, setName] = useState("");
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const [gender, setGender] = useState("");
  const onChangeGender = (e) => {
    setGender(e.target.value);
  };
  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} placeholder="이름" />
      </div>
      <div>
        <select value={gender} onChange={onChangeGender}>
          <option key={""}>-----</option>
          <option key={"남성"}>남성</option>
          <option key={"여성"}>여성</option>
        </select>
        <div>
          <input type="date" />
        </div>
        <div>
          <textarea />
        </div>
      </div>
    </div>
  );
}
export default Body;
