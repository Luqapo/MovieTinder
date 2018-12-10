import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { TextField } from 'redux-form-material-ui';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { styles } from './AddMovieFormStyles';

const validate = values => {
    const errors = {}
    const requiredFields = [ 'title', 'imageURL', 'summary', 'rating' ]
    requiredFields.forEach(field => {
      if (!values[ field ]) {
        errors[ field ] = 'Required'
      }
    })
    return errors
  }
  
const AddMovieForm = props => {
        const { handleSubmit, pristine, reset, submitting, classes } = props;
    
    return (
        <div className={classes.form}>
            <form onSubmit={handleSubmit}>
                <Field name="title" 
                       component={TextField} 
                       label="Title" 
                       hintText="Title"
                    />
                <Field name="imageURL" 
                       component={TextField} 
                       label="Image URL" 
                       hintText="Image URL"
                    />
                <Field name="summary" 
                       component={TextField} 
                       label="Summary" 
                       hintText="Summary"
                    />
                <Field name="rating" 
                       component={TextField} 
                       label="Rating" 
                       hintText="Rating"
                    />
                <Button style={{marginRight: '20px'}} 
                        type="submit" 
                        disabled={ pristine || submitting } 
                        variant="outlined" 
                        color="primary">
                        Submit
                    </Button>
                <Button type="button" 
                        disabled={ pristine || submitting } 
                        variant="outlined" color="secondary" 
                        onClick={reset}>
                        Reset
                    </Button>
            </form>
        </div>
    )
}

export default reduxForm({
    form: 'AddMovieForm',
    validate
})(withStyles(styles)(AddMovieForm));