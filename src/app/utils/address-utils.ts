export function findAddressNumber(addressComponents: {long_name: string, short_name: string, types: string[]}[]): string {
  return findAddressComponent(addressComponents, "street_number");
}

export function findCity(addressComponents: {long_name: string, short_name: string, types: string[]}[]): string {
  return findAddressComponent(addressComponents, "administrative_area_level_2");
}

export function findNeighborhood(addressComponents: {long_name: string, short_name: string, types: string[]}[]): string {
  // Memeriksa sublokalitas atau sublokalitas level 1
  return findAddressComponent(addressComponents, "sublocality") ||
         findAddressComponent(addressComponents, "sublocality_level_1");
}

export function findState(addressComponents: {long_name: string, short_name: string, types: string[]}[]): string {
  return findAddressComponentShortName(addressComponents, "administrative_area_level_1");
}

export function findShortName(addressComponents: {long_name: string, short_name: string, types: string[]}[]): string {
  return findAddressComponentShortName(addressComponents, "administrative_area_level_2");
}

export function findStreet(addressComponents: {long_name: string, short_name: string, types: string[]}[]): string {
  return findAddressComponent(addressComponents, "route");
}

export function findZipCode(addressComponents: {long_name: string, short_name: string, types: string[]}[]): string {
  // Langsung mengembalikan kode pos yang ditemukan
  const element = addressComponents.find(a => a.types.some(t => t == "postal_code"));
  return element ? element.long_name : '';
}

// Fungsi utilitas umum
export function findAddressComponent(
  addressComponents: {long_name: string, short_name: string, types: string[]}[],
  type: string
): string {
  const element = addressComponents.find(a => a.types.some(t => t == type));
  return element ? element.long_name : '';
}

export function findAddressComponentShortName(
  addressComponents: {long_name: string, short_name: string, types: string[]}[],
  type: string
): string {
  const element = addressComponents.find(a => a.types.some(t => t == type));
  return element ? element.short_name : '';
}
