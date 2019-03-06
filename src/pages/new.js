import React from 'react';
import Layout from '../components/layout';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class NewPage extends React.Component {
  render() {
    return (
      <Layout>
        <h1>New Pin Form</h1>
        <form>
          <TextField label="Title" />
          <TextField label="Description" />
          <TextField label="Latitude" />
          <TextField label="Longitude" />
          <TextField label="Link" />
          <RadioGroup name="type">
            <FormControlLabel value="hotel" control={<Radio />} label="Hotel" />
            <FormControlLabel value="attraction" control={<Radio />} label="Attraction" />
            <FormControlLabel value="food_drink" control={<Radio />} label="Food & Drink" />
            <FormControlLabel value="shopping" control={<Radio />} label="Shopping" />
          </RadioGroup>
        </form>
      </Layout>
    );
  }
}

export default NewPage;
