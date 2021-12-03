import React, {useState} from 'react';
import './App.css';
import Icon from './components/Icon';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Card, CardBody, Container, Col, Row } from 'reactstrap';



const itemArray = new Array(9).fill("empty");

const App = () => {
  const [isCross, setIsCross] = useState(true);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
     setIsCross(false);
     setWinMessage("");
     itemArray.fill("empty", 0, 9);
  };

  const checkIsWinner = () => {
     if (
       itemArray[0] === itemArray[1] &&
       itemArray[1] === itemArray[2] &&
       itemArray[0] !== "empty"
     ) {
       setWinMessage(`${itemArray[0]} won the match!!`);
     } else if (
       itemArray[3] !== "empty" &&
       itemArray[3] === itemArray[4] &&
       itemArray[4] === itemArray[5] 
       
     ) {
       setWinMessage(`${itemArray[3]} won the match!!`);
     } else if (  
       itemArray[6] !== "empty" &&
       itemArray[6] === itemArray[7] &&
       itemArray[7] === itemArray[8] 
     ) {
       setWinMessage(`${itemArray[6]} won the match!!`);
     } else if (
       itemArray[0] !== "empty" &&
       itemArray[0] === itemArray[3] &&
       itemArray[3] === itemArray[6] 
       
     ) {
       setWinMessage(`${itemArray[0]} won the match!!`);
     } else if (
       itemArray[1] !== "empty" &&
       itemArray[1] === itemArray[4] &&
       itemArray[4] === itemArray[7] 
       
     ) {
       setWinMessage(`${itemArray[1]} won the match!!`);
     } else if (
       itemArray[2] !== "empty" &&
       itemArray[2] === itemArray[5] &&
       itemArray[5] === itemArray[8] 
       
     ) {
       setWinMessage(`${itemArray[2]} won the match!!`);
     } else if (
       itemArray[0] !== "empty" &&
       itemArray[0] === itemArray[4] &&
       itemArray[4] === itemArray[8] 
       
     ) {
       setWinMessage(`${itemArray[0]} won the match!!`);
     } else if (
       itemArray[2] !== "empty" &&
       itemArray[2] === itemArray[4] &&
       itemArray[4] === itemArray[6] 
       
     ) {
       setWinMessage(`${itemArray[2]} won the match!!`);
     }
     
  };

  const changeItem = (itemNumber) => {
    if(winMessage){
      return toast(winMessage, {type: "success"});
    }
    if(itemArray[itemNumber] === "empty"){
      itemArray[itemNumber] = isCross ? "circle": "cross";
      setIsCross(!isCross);

    }else{
        toast("already filled!", {type: "error"});
    }
    checkIsWinner();
  };

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage ? (
            <div style={{textAlign:"center"}}>
              <h1 className="text-warning text-uppercase text-center">
                {winMessage}
              </h1>
              <Button style={{margin:"10px"}} color="danger" size="lg"  onClick={reloadGame}>
                reload game
              </Button>
            </div>
          ) : (
            <h1 className="text-center text-warning">
              now {isCross ? "circle" : "cross"}'s turn
            </h1>
          )}
          <div className="grid">
            {itemArray.map((item, index) => (
              <Card color="info" onClick={() => changeItem(index)}>
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default App;
