import React from 'react'

function Form() {
  return (
    <div>
        <form>
  <fieldset disabled>
    <legend>Name</legend>
    <div className="mb-3">
      <input type="text" id="disabledTextInput" className="form-control" placeholder="Name"/>
    </div>
    <legend>Price</legend>
    <div className="mb-3">
      <input type="text" id="disabledTextInput" className="form-control" placeholder="Price"/>
    </div>
    <legend>Quantity</legend>
    <div className="mb-3">
      <input type="text" id="disabledTextInput" className="form-control" placeholder="Quantity"/>
    </div>
    
    <button type="submit" className="btn btn-success">Submit</button>
  </fieldset>
</form>
    </div>
  )
}

export default Form