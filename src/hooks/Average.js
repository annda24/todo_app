import React,{useState, useRef, useCallback, useMemo} from 'react'
const getAverage = lists => {
    console.log('평균값 계산중...');
    if(lists.length === 0) return 0;
    const sum = lists.reduce((a,b) => a+b); // reduce 각 값을 가져옴
    return sum / lists.length;
}

function Average() {
  // useState : state 정의
  const [lists,setLists] = useState([]);    // lists = [], setLists
  const [number,setNumber] = useState('');    // number = '', setNumber
  
  // useRef
  const inputEl = useRef(null);

  // useCallback : useCallback(e => {},[]);
  const onChange = useCallback( e => {
    console.log('컴포넌트가 처음 랜더링 될 때만 함수 생성')
    setNumber(e.target.value);
  },[]);// []가 비어있으므로, 컴포넌트가 처음 랜더링 될 때만 함수 생성, 한번만 실행

  //
  const onInsert = useCallback(e => {
    console.log('number/lists가 바뀌었을때만 함수 생성');
    const nextLists = lists.concat(parseInt(number));    // concat : 뒤에 text를 추가함.
    setLists(nextLists);
    setNumber('');
    inputEl.current.focus();
  },[number,lists]);    // []안의 값이 업데이트 될때마다 실행

  // useMemo
  const avg = useMemo(()=>getAverage(lists),[lists]);

  return (
    <div>
        <div>Average</div>
        <input value={number} onChange={onChange} ref={inputEl} />
        <button onClick={onInsert}>등록</button>
        <ul>
            {lists.map((list,index) => (
                <li key={index}>{list}</li>
            ))}
        </ul>
        <div><b>평균값 : </b> {avg} </div>
    </div>
  )
}

export default Average