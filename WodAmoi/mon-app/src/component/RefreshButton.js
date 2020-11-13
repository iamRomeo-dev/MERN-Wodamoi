import React from "react";
import Button from "react-bootstrap/Button";


const RefreshButton = () => {

    function refreshPage(){ 
        window.location.reload(); 
    }

    return (
      <Button variant="btn btn-outline-light bg-dark mt-4 mb-4 rounded border-0 btn-lg" onClick={ refreshPage }>
      Refresh
    </Button>
    )
}

export default RefreshButton;