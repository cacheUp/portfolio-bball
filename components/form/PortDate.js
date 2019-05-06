import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import { FormGroup, Label, Button } from "reactstrap";
import "react-datepicker/dist/react-datepicker.css";

export default class PortDate extends React.Component {
  constructor(props) {
    super(props);

    const dateValue = props.initialDate ? moment(props.initialDate) : moment();
    this.state = {
      dateValue,
      isHidden: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  setFieldValueAndTouched(date, touched) {
    const { setFieldValue, setFieldTouched } = this.props.form;
    const { name } = this.props.field;

    setFieldValue(name, date, true);
    setFieldTouched(name, touched, true);
  }

  handleChange(date) {
    this.setState({
      dateValue: date
    });

    this.setFieldValueAndTouched(date, true);
  }

  toggleDate(date) {
    this.setState({
      isHidden: !this.state.isHidden
    });

    this.setFieldValueAndTouched(date, true);
  }

  render() {
    const {
      label,
      field,
      form: { touched, errors },
      canBeDisabled
    } = this.props;
    const { isHidden, dateValue } = this.state;

    return (
      <React.Fragment>
        <FormGroup>
          <Label>{label}</Label>
          <div className="input-group">
            {!isHidden && (
              <DatePicker
                selected={dateValue}
                onChange={this.handleChange}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                maxDate={moment()}
                dropdownMode="select"
              />
            )}
          </div>
          {!isHidden && canBeDisabled && (
            <Button onClick={() => this.toggleDate(null)}>
              Still working here...
            </Button>
          )}

          {canBeDisabled && isHidden && (
            <React.Fragment>
              <span>Still Working Here</span>

              <Button onClick={() => this.toggleDate(dateValue)}>
                {" "}
                Set End Date
              </Button>
            </React.Fragment>
          )}

          {touched[field.name] && errors[field.name] && (
            <div className="error">{errors[field.name]}</div>
          )}
        </FormGroup>
      </React.Fragment>
    );
  }
}
