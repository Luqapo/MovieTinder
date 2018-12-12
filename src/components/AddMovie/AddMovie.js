import React from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AddMovieForm from './AddMovieForm/AddMovieForm';
import { url } from '../../config/config';

const AddMovie = props => {

    const handleMovieSubmit = values => {
        fetch(`${url}/api/movie`, {
            method : 'POST',
            body : JSON.stringify({
              title: values.title,
              imageURL: values.imageURL,
              summary: values.summary,
              rating: values.rating
            }),
            headers: {
                'Content-Type': 'application/json',
            },
           })
          .then( resp => {
            if (resp.ok){
              return resp;
            } else {
                async function getErorrMessage(){
                  const errorMessage = await resp.json();
                  alert(errorMessage.message);
                }
                getErorrMessage();
            }
          })
          .then(resp => resp.json())
          .then( resp => {
            alert(resp.message);
            })
          .catch( error => {
             alert('Network error!');
          })
      }

    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <AddMovieForm onSubmit={handleMovieSubmit}/>
      </MuiThemeProvider>
    )
}

export default AddMovie;