class UI{
    constructor(firstSelect,secondSelect){
        this.firstSelect = firstSelect;
        this.secondSelect = secondSelect;

        this.outputFirst = document.getElementById("outputFirst");
        this.outputSecond = document.getElementById("outputSecond");
        this.outputResult = document.getElementById("outputResult");
        
    }

    changeFirst(){
        this.outputFirst.textContent = this.firstSelect.options[this.firstSelect.selectedIndex].textContent;
        ui.changeFirst();

    }
    changeSecond(){
        this.outputSecond.textContent = this.secondSelect.options[this.secondSelect.selectedIndex].textContent;
        ui.changeSecond(); 
    }
    displayResult(result) {
        this.outputResult.value = result;
    }

}