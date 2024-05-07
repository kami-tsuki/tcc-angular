import {Address} from "../../interfaces/data/address";

export class TccAddress implements Address {
  ZIP?: string;
  city?: string;
  country?: string;
  street?: string;
  number?: string;

  constructor(address: string, format : RegExp = /(.*) (\d+), (\d+) (.+), (.+)/) {
    const match = address.match(format);

    if (match && match.length === 6) {
      this.street = match[1];
      this.number = match[2];
      this.ZIP = match[3];
      this.city = match[4];
      this.country = match[5];
    } else {
      throw new Error('Invalid address format');
    }
  }

  public toString(format: string = "{street} {number}, {ZIP} {city}, {country}") : string {
    const replacements: { [key: string]: string | undefined } = {
      "{street}": this.street,
      "{number}": this.number,
      "{ZIP}": this.ZIP,
      "{city}": this.city,
      "{country}": this.country
    };

    return format.replace(/{\w+}/g, function(all) {
      if (replacements[all] === undefined) {
        throw new Error(`Address property ${all} is undefined`);
      }
      return replacements[all] || all;
    });
  }
}
