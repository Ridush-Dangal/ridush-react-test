import React,{Fragment} from 'react';
function Html() {
  return (
    <Fragment>
      <form>
        <label>
          FirstName:
          <input type="text" name="name" />
        </label>
        <br />

        <label>
          LastName:
          <input type="text" name="name" />
          </label>
          <br/>
        <input type="submit" value="submit" />
 </form>
 
    </Fragment>
    
  )
}
export default Html;