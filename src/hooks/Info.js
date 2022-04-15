// useEffect : componentDidMount, componentDidUpdate 기능을 수행함.
import React,{useState, useEffect} from 'react'
// 구조 분해 형식으로 useState, useEffect
function Info() {
  const [name, setName] = useState(''); // 빈 string
  const [nickname, setNickname] = useState('');

  useEffect( ()=>{
      console.log("랜더링이 완료되었습니다.");
      console.log({name},{nickname});
  },[name,nickname]);

  const onChangeName = (e) => {
      setName(e.target.value);
  }
  
  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  }
  return (
    <div>
        <div>Info</div>
        <div>
            <input value={name} onChange={onChangeName}></input>
            <input value={nickname} onChange={onChangeNickname}></input>
        </div>
        <div>
            <div><b>이름 : </b> {name}</div>
            <div><b>닉네임 : </b> {nickname}</div>
        </div>
    </div>
  )
}

export default Info