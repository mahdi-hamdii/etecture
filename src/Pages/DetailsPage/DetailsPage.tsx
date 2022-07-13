import { useParams } from "react-router-dom";
import { starWarsProps } from "../Home/Components/DataTable"
import { NavLink } from 'react-router-dom';
import { FormattedDate, FormattedNumber } from 'react-intl';

const DetailsPage = () => {
    const row = JSON.parse(localStorage.getItem('row') || "")
    let keys = Object.keys(row);
    console.log("row", row)
    console.log("keys",keys)
    return (
<div className='container' >
            <div className="card">
                <div>
                        <NavLink to="/" style={{display: "flex",textDecoration: "none",color: "#979d0f"}} >
                            Home Page
                        </NavLink>

                        <h1>
                            {row.name}
                        </h1>

                        {keys.map((item) =>



                            <div key={item}  >
                                {['films','pilots'].includes(item) &&
                                    <>
                                        <span  style={{fontWeight:"bold", marginRight:"20px"}}>
                                            {item}:
                                        </span>
                                        {row[item].map((element: string) =>
                                            <div>
                                                • {element}
                                            </div>

                                        )}

                                    </>
                                }
                                {['created','edited'].includes(item) &&
                                    <>
                                        <span style={{fontWeight:"bold", marginRight:"20px"}} >
                                            {item}:
                                        </span>
                                        <FormattedDate
                                            value={row[item]}
                                        />
                                    </>
                                }
                                {['cost_in_credits','passengers','length','MGLT','crew','cargo_capacity'].includes(item) &&
                                    <>
                                        <span style={{fontWeight:"bold", marginRight:"20px"}}>
                                            {item}:
                                        </span>
                                        < FormattedNumber value={Number(row[item])} />
                                    </>
                                }

                                {['model','manufacturer','hyperdrive_rating','max_atmosphering_speed','url','starship_class','consumables'].includes(item) &&
                                    <>
                                        <span style={{fontWeight:"bold", marginRight:"20px"}} >
                                            {item}:
                                        </span>
                                        {row[item]}
                                    </>
                                }
                            </div>
                        )}
                </div>

            </div>
        </div >
    )
};
export default DetailsPage;