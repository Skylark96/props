import React from 'react'
import PropTypes from 'prop-types';

const profile = (props) => {
    console.log(props)

  return (
    <div className='itemsBox'>
      <div className="name">{props.fullName}</div>
      <div className="water">Ala Farhat</div>
      <div className="job">{props.profession}</div>
      <div className="bio">{props.bio}</div>
      <button className='btn' onClick={()=>props.handleName(props.fullName)}>Show</button>
    </div>
  )
}
profile.defaultProps={
  props:"Skylark"
}

profile.propTypes = {
  props: PropTypes.string
};
export default profile