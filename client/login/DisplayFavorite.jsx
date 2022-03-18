import React from 'react';

const DisplayFavorite = props => (
  <div className='form-box'>
    <form>
      <input className='submit-form' type='text' placeholder='type author here'/>
      <input type='submit' className='btn submit' onClick={() => props.getFavoriteClick('hello')}/>
    </form>
  </div>
)

export default DisplayFavorite;