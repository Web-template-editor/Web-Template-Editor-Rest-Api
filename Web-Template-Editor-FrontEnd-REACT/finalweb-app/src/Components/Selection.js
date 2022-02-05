import React from "react";
import { Button } from "react-bootstrap";
function Selection(){
    return(
        <div className="d-grid gap-2">
  <Button variant="light" size="lg">
    PROJECT
  </Button>
  <Button variant="light" size="lg"><a href="/Members"> MEMBERS</a>
    
  </Button>
</div>
    )
}
export default Selection