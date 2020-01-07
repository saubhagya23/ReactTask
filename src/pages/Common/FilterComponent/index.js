import React from 'react';
import { Form, Checkbox } from 'semantic-ui-react';
import { filterCategories } from  '../DropDown/DropDownOptions';
import { FormContainer } from './styles';

const FilterComponent = props => {
  // state = {};
  // handleChange = (e, { value }) => this.setState({ value });

  console.log('props->', props);
  return (
    <FormContainer>
      {
        filterCategories.map(category => (
          <div>
            <Form.Field>
              <h4>{category.name}</h4>
            </Form.Field>
            <Form.Field>
              {
                category.data.map(categoryItem => {
                  const itemVal = categoryItem.value;
                  return (
                    <Checkbox
                      radio
                      label={categoryItem.text}
                      name='checkboxGroup'
                      category={category.name}
                      value={categoryItem.value}
                      checked={(category.name === 'Species' && categoryItem.value === props.selectedSpecies) || (category.name === 'Gender' &&categoryItem.value === props.selectedGender)}
                      onChange={(e, itemVal) => props.onChange(e, itemVal)}
                    />
                  );
                })
              }
            </Form.Field>
          </div>
        ))
      }
    </FormContainer>  
  );
}

export default FilterComponent;