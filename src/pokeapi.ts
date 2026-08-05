export interface NamedAPIResource {
  name: string;
  url: string;
}

export interface Name {
  name: string;
  language: NamedAPIResource;
}

export interface EncounterMethodRate {
  encounter_method: NamedAPIResource;
  version_details: VersionDetail[];
}

export interface VersionDetail {
  rate: number;
  version: NamedAPIResource;
}

export type PokemonEncounter = {
  pokemon: NamedAPIResource;
  version_details: VersionEncounterDetail[]
}

export interface VersionEncounterDetail {
  version: NamedAPIResource;
  max_chance: number;
  encounter_details: Encounter[]
}

export interface Encounter {
  min_level: number;
  max_level: number;
  condition_values: NamedAPIResource[];
  method: NamedAPIResource;
  chance: number;
}

export type ShallowLocations = {
  count: number;
  next: string | null;
  previous: string | null;
  results: NamedAPIResource[];
}

export type Location = {
  id: number;
  game_index: number;
  location: NamedAPIResource;
  encounter_method_rates: EncounterMethodRate[];
  name: string;
  names: Name[];
  pokemon_encounters: PokemonEncounter[]

}
export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() { }

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const locationUrl = PokeAPI.baseURL + "/location-area";
    const requestUrl = pageURL || locationUrl;

    const res = await fetch(requestUrl);

    if (!res.ok) {
      throw new Error(`Request failed: ${res.status}`);
    }

    const data: ShallowLocations = await res.json();
    return data
  }

  async fetchLocation(locationName: string): Promise<Location> {
    if (!locationName) {
      throw new Error("Location name parameter must be passed");
    }
    const locationUrl = PokeAPI.baseURL + `/location-area/${locationName}/`;
    const res = await fetch(locationUrl);

    if (!res.ok) {
      throw new Error(`Request failed: ${res.status}`);
    }

    const data: Location = await res.json();
    return data;
  }
}
