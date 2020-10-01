/*global google:true*/
/*eslint no-undef: "error"*/
import React from 'react';

import { NX_KEY_API_GOOGLE_PLACES } from '../../Config';
import TextField from './TextField';

class LocationAutocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.autocompleteInput = React.createRef();
    this.autocomplete = null;
  }

  iniAutocomplete = () => {
    this.autocomplete = new google.maps.places.Autocomplete(
      this.autocompleteInput.current,
      { types: ['(cities)'] }
    );
    this.autocomplete.setFields([
      'geometry',
      'utc_offset',
      'formatted_address',
      'name',
      'place_id',
    ]);
    this.autocomplete.addListener('place_changed', this.handlePlaceChanged);
  };

  componentDidMount() {
    const key = NX_KEY_API_GOOGLE_PLACES;

    const src = `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places&language=en`;
    if (!document.getElementById(key)) {
      const script = document.createElement('script');
      script.src = src;
      script.id = key;
      script.async = true;
      script.type = 'text/javascript';
      script.onload = this.iniAutocomplete;

      if (document.body) {
        document.body.appendChild(script);
      }
    } else {
      this.iniAutocomplete();
    }
  }

  handlePlaceChanged = () => {
    const { input, onChangePlace } = this.props;
    const { onChange } = input;
    const place = this.autocomplete.getPlace();
    onChange && onChange(place.formatted_address);
    onChangePlace &&
      onChangePlace({
        utcOffset: place.utc_offset,
        city: place.name,
        cityCountry: place.formatted_address,
      });
  };

  render() {
    return (
      <TextField
        {...this.props}
        autocomplete="false"
        ref={this.autocompleteInput}
      />
    );
  }
}

export default LocationAutocomplete;
