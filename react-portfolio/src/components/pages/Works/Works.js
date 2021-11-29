import "./Works.css"
import Product from "../../product/Product"
import {products} from "../../../data"

export default function Works() {
    return (
        <div className="pl" >
            <div className="pl-texts">
                <h1 className="pl-title">Create & inspire. Its Lama</h1>
                <p className="pl-desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
                with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>    
            </div>
            <div className="pl-list">
                <div className="card">
                    <h1>Card</h1>
                    <div className="card">1</div>
                </div>
                <div className="card">
                    <h1>Card</h1>
                    <div className="card">2</div>
                </div>
                <div className="card">
                    <h1>Card</h1>
                    <div className="card">3</div>
                </div>
                <div className="card">
                    <h1>Card</h1>
                    <div className="card">4</div>
                </div>
                <div className="card">
                    <h1>Card</h1>
                    <div className="card">5</div>
                </div>
                <div className="card">
                    <h1>Card</h1>
                    <div className="card">6</div>
                </div>
            </div>
            <div className="names">
            {products.map((item) => (
                <Product img={item.img} descrition={item.description} key={item.id} />
            ))}
            </div>
        </div>
    )
}
