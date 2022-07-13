import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest'
import { render, screen } from '../../utils/test-utils'
import DetailsPage from './DetailsPage';
import { starWarsProps } from '../Home/Components/DataTable';
const rowToBeTested: starWarsProps =         {
    "name": "CR90 corvette", 
    "model": "CR90 corvette", 
    "manufacturer": "Corellian Engineering Corporation", 
    "cost_in_credits": "3500000", 
    "length": "150", 
    "max_atmosphering_speed": "950", 
    "crew": "30-165", 
    "passengers": "600", 
    "cargo_capacity": "3000000", 
    "consumables": "1 year", 
    "hyperdrive_rating": "2.0", 
    "MGLT": "60", 
    "starship_class": "corvette", 
    "pilots": [], 
    "films": [
        "https://swapi.dev/api/films/1/", 
        "https://swapi.dev/api/films/3/", 
        "https://swapi.dev/api/films/6/"
    ], 
    "created": "2014-12-10T14:20:33.369000Z", 
    "edited": "2014-12-20T21:23:49.867000Z", 
    "url": "https://swapi.dev/api/starships/2/"
}

describe("testing one item page", () => {

    it("testing if the item exists", async () => {
        localStorage.setItem("row", JSON.stringify(rowToBeTested))

        render(
            <BrowserRouter>
                <IntlProvider locale={'de-DE'} >
                    <DetailsPage />
                </IntlProvider>
            </BrowserRouter>
        );

        const row = await screen.findByText("CR90 corvette");
        expect(row).toBeVisible();
    });


})