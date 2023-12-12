import { useState } from "react";

function Body() {
  const [state, setState] = useState({
    name: "",
    gender: "",
    birth: "",
    bio: "",
  });
  const handleOnChange = (e) => {
    console.log(e);
  };
  return (
    <div>
      <div>
        <input name="name" onChange={handleOnChange} placeholder="이름" />
      </div>
      <div>
        <select>
          <option key={""}>-----</option>
          <option key={"남성"}>남성</option>
          <option key={"여성"}>여성</option>
        </select>
        <div>
          <input type="date"/>
        </div>
        <div>
          <textarea name=""/>
        </div>
      </div>
    </div>
  );
}
export default Body;
