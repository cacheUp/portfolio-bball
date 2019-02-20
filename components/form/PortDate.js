import React from "react";
import DatePicker from "react-datepicker";
import { FormGroup, Label } from "reactstrap";
import "react-datepicker/dist/react-datepicker.css";

export default class PortDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateValue: new Date()
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

  render() {
    const { isBrowserLoaded } = this.state;
    const { label } = this.props;

    return (
      <React.Fragment>
        {isBrowserLoaded && (
          <FormGroup>
            <Label>{label}</Label>
            <div className="input-group">
              <DatePicker
                selected={this.state.dateValue}
                onChange={this.handleChange}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                maxDate={new Date()}
                dropdownMode="select"
              />
            </div>
          </FormGroup>
        )}
      </React.Fragment>
    );
  }
}
