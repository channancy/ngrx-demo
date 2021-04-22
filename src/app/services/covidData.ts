export interface CovidData {
  state: string;
  population: number;
  actuals: {
    cases: number;
    deaths: number;
    vaccinesDistributed: number;
    vaccinesAdministered: number;
  };
}
