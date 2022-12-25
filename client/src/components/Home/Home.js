import React from "react";
import {Alert,Button} from 'react-bootstrap'
import { useState } from "react";
import './home.css'

const Home=()=>{
    const [show, setShow] = useState(false);
    return(
        <div>
           <Alert className="mt-4" show={show} variant="success">
        <Alert.Heading>How's it going?!</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-center">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me y'all!
          </Button>
        </div>
      </Alert>

      {!show && <div className="d-flex justify-content-center"><Button size="lg" className="mt-4" variant="info" onClick={() => setShow(true)}>About This App</Button></div>}
        </div>
    )
}

export default Home;