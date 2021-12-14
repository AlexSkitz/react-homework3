import React, { Component, Fragment, useState, useEffect } from "react";

// class Films extends Component {
//     constructor(props) {
//         super(props);
//         this.films = [];
//         this.state = {
//             searchFieldValue: '',
//             sortedFilms: [],
//         }
//     }

//     componentDidMount() {
//         const url = 'http://api.tvmaze.com/shows';
//         fetch(url)
//             .then((Response) => {
//                 return Response.json();
//             })
//             .then((data) => {
//                 let arr = [];
//                 let arrayLenght = 20;

//                 if (data.length < arrayLenght) { arrayLenght = data.length }
//                 for (let i = 0; i < arrayLenght; i++) {
//                     arr.push({
//                         name: data[i].name,
//                         year: data[i].premiered.slice(0, 4),
//                         runtime: data[i].runtime,
//                     });
//                 }
//                 this.setState({ ...this.state, sortedFilms: [...arr] });
//                 this.films = [...arr];
//             });
//     }
//     TypeValue = (value) => {
//         this.setState({ value: value });
//     }
//     sortValue = (field) => {
//         return (a, b) => a[field] > b[field] ? 1 : -1;
//     }

//     onSortButton = (field) => {
//         let arrFilms = [...this.films];
//         arrFilms.sort(this.sortValue(field));
//         this.setState({ ...this.state, sortedFilms: [...arrFilms] });
//     }

//     searchField = (event) => {
//         let arr = [];
//         arr = this.films.filter(item => item.name.includes(event.target.value));
//         this.setState({ ...this.state, sortedFilms: [...arr], searchFieldValue: event.target.value });
//     }

//     render() {
//         return (
//             <Fragment>
//                 <div className="container">
//                     <div className="search">
//                         <input placeholder="Search..." onChange={event => this.searchField(event)} value={this.state.searchFieldValue}></input>
//                     </div>
//                     <div className="filters">
//                         <button onClick={() => { this.onSortButton('name') }}>Name</button>
//                         <button onClick={() => { this.onSortButton('year') }}>Year</button>
//                         <button onClick={() => { this.onSortButton('runtime') }}>Runtime</button>
//                     </div>
//                     <div className="filmList">
//                         <ul>
//                             {(this.state.sortedFilms.length) && (() => {
//                                 return (
//                                     <li>
//                                         <span>Title</span>
//                                         <span>Year</span>
//                                         <span>Runtime</span>
//                                     </li>
//                                 )
//                             })()}
//                             {(this.state.sortedFilms.length === 0) ? 'No data' :
//                                 this.state.sortedFilms.map((elem, index) => {
//                                     return (
//                                         <li key={index}>
//                                             <span>{elem.name}</span>
//                                             <span>{elem.year}</span>
//                                             <span>{elem.runtime}</span>
//                                         </li>
//                                     );
//                                 })}


//                         </ul>
//                     </div>
//                 </div>
//             </Fragment >
//         )
//     }
// }


const Films = () => {
    const [myState, setMyState] = useState({
        films: [],
        searchFieldValue: '',
        sortedFilms: [],
    })
    const sortValue = (field) => {
        return (a, b) => a[field] > b[field] ? 1 : -1;
    }

    const onSortButton = (field) => {
        let arrFilms = [...myState.films];
        arrFilms.sort(sortValue(field));
        setMyState({ ...myState, sortedFilms: [...arrFilms] });
    }
    const searchField = (event) => {
        let arr = [];
        arr = myState.films.filter(item => item.name.includes(event.target.value));
        setMyState({ ...myState.state, sortedFilms: [...arr], searchFieldValue: event.target.value });
    }

    const fetchFilms = () => {
        const url = 'http://api.tvmaze.com/shows';
        fetch(url)
            .then((Response) => {
                return Response.json();
            })
            .then((data) => {
                let arr = [];
                let arrayLenght = 20;

                if (data.length < arrayLenght) { arrayLenght = data.length }
                for (let i = 0; i < arrayLenght; i++) {
                    arr.push({
                        name: data[i].name,
                        year: data[i].premiered.slice(0, 4),
                        runtime: data[i].runtime,
                    });
                }
                setMyState({ ...myState, sortedFilms: [...arr], films: [...arr] });
            });
    }
    useEffect( fetchFilms, [] );

    return (
        <Fragment>
            <div className="container">
                <div className="search">
                    <input placeholder="Search..." onChange={event => searchField(event)} value={myState.searchFieldValue}></input>
                </div>
                <div className="filters">
                    <button onClick={() => {onSortButton('name') }}>Name</button>
                    <button onClick={() => {onSortButton('year') }}>Year</button>
                    <button onClick={() => {onSortButton('runtime') }}>Runtime</button>
                </div>
                <div className="filmList">
                    <ul>
                        {(myState.sortedFilms.length) && (() => {
                            return (
                                <li>
                                    <span>Title</span>
                                    <span>Year</span>
                                    <span>Runtime</span>
                                </li>
                            )
                        })()}
                        {(myState.sortedFilms.length === 0) ? 'No data' :
                            myState.sortedFilms.map((elem, index) => {
                                return (
                                    <li key={index}>
                                        <span>{elem.name}</span>
                                        <span>{elem.year}</span>
                                        <span>{elem.runtime}</span>
                                    </li>
                                );
                            })}


                    </ul>
                </div>
            </div>
        </Fragment >
    )
}

export default Films;