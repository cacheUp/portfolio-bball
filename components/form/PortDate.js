import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import { FormGroup, Label, Button } from "reactstrap";
import "react-datepicker/dist/react-datepicker.css";

export default class PortDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateValue: moment(),
      isHidden: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({ isBrowserLoaded: true });
  }

  handleChange(date) {
    const { setFieldValue, setFieldTouched } = this.props.form;
    const { name } = this.props.field;
    this.setState({
      dateValue: date
    });

    setFieldValue(name, date, true);
    setFieldTouched(name, true, true);
  }

  toggleDate(date) {
    const { setFieldValue, setFieldTouched } = this.props.form;
    const { name } = this.props.field;
    this.setState({
      isHidden: !this.state.isHidden
    });

    setFieldValue(name, date, true);
    setFieldTouched(name, true, true);
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
            <Button onClick={() => this.toggleDate()}>
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
