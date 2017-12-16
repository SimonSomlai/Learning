var _ = require('lodash')

$(document).ready(function(){
    function Dispatcher(){
        this.observables = [] 
        
        this.Add = (obj) => {
            console.log("Adding ", obj, " to the observer list");
            return this.observables.push(obj)
        }
        this.Remove = (id) => {
           console.log("removing ", id, " from the observer list");
           var index = _.findIndex(this.observables, {id})
           return this.observables.splice(index, 1)
        }

        this.Emit = (context) => {
            console.log("notify each element to update its state");
            this.observables.forEach(element => {
                element.Update(context)
            });
        }
    }

    function AddNewObserver(){
        var check = document.createElement('input')
        check.type = 'checkbox'
        
        check.Update = (value) => {
            check.checked = value;
        }

        dispatcher.Add(check)
        container.appendChild(check)
    }

    
    var controlCheckbox = document.getElementById("mainCheckbox")
    var addBtn = document.getElementById("addNewObserver")
    var container = document.getElementById("observersContainer")

    var dispatcher = new Dispatcher()
    controlCheckbox["onclick"] = () => {dispatcher.Emit(controlCheckbox.checked)}
    addBtn["onclick"] = AddNewObserver
})
