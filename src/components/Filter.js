import React, { Component } from 'react';

class Filter extends Component {

  // Generates html for filter checkboxes
  generateFilters(filter) {
    return (
      <div key={'filterBlock'+ filter.name}>
        <h4>{filter.name}</h4>
        {/* Iterate over all filters and generate input checkboxes for a particular type of filter */}
        {
          filter.values.map(value => {
              const inputId = 'input' + value;
              return (
                <div key={inputId} className="filter-box">
                  <label htmlFor={inputId}>{value}</label>
                  <input id={inputId} type="checkbox" name={filter.name} value={value}/>
                </div>
              )
          })
        }
      </div>
    )
  }

  // Handles any change in form for filtering process
  onFormChange(e) {
    // Extract all the filters from props and init to empty array
    let filters = {}
    this.props.filters.forEach(fil => filters[fil.name] = [])

    for(let i = 0; i < this.filterForm.length; i++) {
      const filter = this.filterForm[i]

      // Update only if checkbox is checked for filters
      if(filter.checked) {
          filters[filter.name].push(filter.value)
      }
    }
    this.props.updateFilter(filters);
  }

  render() {
    return (
      <div className="filter">
        <h2>Filter Page</h2>
        <form ref={(input) => this.filterForm = input} onChange={(e) => this.onFormChange(e)}>
          {
            this.props.filters
              .map(filter => {
                  return this.generateFilters(filter)
              })
          }
        </form>
      </div>
    )
  }
}

export default Filter;
