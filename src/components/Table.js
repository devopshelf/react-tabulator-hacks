import React, { Component } from 'react'
import { ReactTabulator,reactFormatter } from 'react-tabulator';
import '../../node_modules/react-tabulator/lib/css/tabulator.min.css';


class Table extends Component {
    constructor(props) {
      super(props)
      this.state = {
         rowNo:null, 
         data:[
            {
                id:1,
                name:"shubham",
                address:"pres",
                email:"jkldjlsjlkf",
                mobile:234243
            },
            {
                id:2,
                name:"Vikas",
                address:"pres",
                email:"jkldjlsjlkf",
                mobile:234243
            },
            {
                id:3,
                name:"Akash",
                address:"pres",
                email:"jkldjlsjlkf",
                mobile:234243
            }
        
        ],
         columns:[
            {
                title:"id",
                field:"id"
            },
            {
                title:"name",
                field:"name",
                formatter: reactFormatter(<input type="text" onChange={(e)=>{
                    console.log(e.target.value)
                }} />)
            },
            {
                title:"address",
                field:"address",
                formatter: reactFormatter(<input type="text" onChange={(e)=>{
                    console.log(e.target.value)
                }} />)
            },
            {
                title:"email",
                field:"email",
                formatter: reactFormatter(<input type="text" onChange={(e)=>{
                    console.log(e.target.value)
                }} />)
            },
            {
                formatter:"tickCross",
                cellClick:(e,cell)=>{
                       this.deleteRow(cell._cell.row)
                }

            }
         ]
      }
      this.addRow = this.addRow.bind(this);
      this.deleteRow = this.deleteRow.bind(this);
    }
    
   addRow(){
       if(this.state.rowNo === null){
            this.setState({
                data:[...this.state.data,{}]
            })
       }else{
            let newDataArray = this.state.data;
            newDataArray.splice(this.state.rowNo,0,{});
            this.setState({
                data:newDataArray
            })
       }
   } 

   deleteRow(row){
      function check(obj){
            return row.data.id === obj.id
       }
      const index = this.state.data.findIndex(check);  
      const newDataArray = this.state.data;
      newDataArray.splice(index,1);
      this.setState({
          data:newDataArray
      })
   }

  render() {
    console.log(this.state.rowNo)
    return (
      <div>
        <button onClick={this.addRow}>ADD</button>  
        <ReactTabulator 
            data={this.state.data}
            columns={this.state.columns}
            rowClick={(e,row)=>{
                this.setState({ rowNo:row._row.data.id});
            }}
        />
      </div>
    )
  }
}

export default Table;
