import './App.css';
import { useState } from 'react';

function App() {

  let post = "제목";
  let [글제목, setpost] = useState(["ㅇ첫번째 글", "ㄹ두번째 글", "ㄱ세번째 글"]);
  let [like, setlike] = useState(0);

  function likeUp() {
    setlike(like+1);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4 >{post}</h4>
      </div>

      <button onClick={()=>{
        let copy = [...글제목.sort()];
        setpost(copy);
      }}>
        가나다순정렬
      </button>



      <button onClick={ ()=>{
        let copy = [...글제목];
        copy[0] = 'asdf';
        setpost(copy);
        }}> 수정 </button>

      <div className="list">
        <h4> {글제목[0]} <span onClick={likeUp}> 👍 {like} </span>
        </h4>
        <p> 4월 4일 </p>
      </div>
      <div className="list">
        <h4> {글제목[1]} </h4>
        <p> 2024년 </p>
      </div>
      <div className="list">
        <h4> {글제목[2]} </h4>
        <p> 5시 </p>
      </div>

      <ModalF/>
      <ModalF/>

    </div>
  );
}


function ModalF(){
  return (

    <div className='modal'>
      <h4>sdf</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>

  )

}
export default App;
