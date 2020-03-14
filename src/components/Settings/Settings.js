import React, { Fragment } from 'react'
import Search from './Search/Search'
import Filters from './Filters/Filters'
import Divider from '../Divider/Divider'

const Settings = (props) => {
  return(
    <Fragment>
      <Search 
      topic={props.topic} 
      handleChange={props.handleChange} 
      handleSubmit={props.handleSubmit}
      />
      <Divider margin={50}/>
      <Filters 
        handleChange={props.handleChange} 
        sortBy={props.sortBy} 
        fromDate={props.fromDate} 
        toDate={props.toDate}
      />
    </Fragment>
  )
}

export default Settings