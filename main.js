class Tamagotchi {
    constructor(name) {
        this.name = name;
        this.hunger = 0;
        this.happiness = 5; // Начальный уровень счастья
        this.boredom = 0;
        this.tiredness = 0;
        this.level = 1;
        this.money = 10000; // Начальное количество денег
        this.actionsCount = 0; // Счетчик действий
        this.inventory = { "food": 0, "toy": 0, "bed": 0 }; // Инвентарь

        // Добавим обновление отображения денег
        this.updateMoneyDisplay();
    }

    // Новая функция для обновления отображения денег
    updateMoneyDisplay() {
        const moneyDisplay = document.getElementById('moneyDisplay');
        if (moneyDisplay) {
            moneyDisplay.textContent = this.money;
        } else {
            console.error('Element with id "moneyDisplay" not found');
        }
    }


    feed() {
        if (this.inventory.food > 0) { // Проверяем наличие еды в инвентаре
            this.hunger--;
            this.money--;
            this.actionsCount++;
            if (this.actionsCount >= 5) {
                this.evolve();
            }
            this.inventory.food--; // Уменьшаем количество еды в инвентаре
            this.happiness++; // Увеличиваем уровень счастья
            this.updateMoneyDisplay(); // Обновляем отображение денег
            alert(`Питомец накормлен(а)!`);
        } else {
            alert("У вас нет еды! Купите еду в магазине.");
        }
    }

    
    play() {
        if (this.inventory.toy > 0) { // Проверяем наличие игрушек в инвентаре
            this.boredom--;
            this.money--;
            this.actionsCount++;
            if (this.actionsCount >= 5) {
                this.evolve();
            }
            this.inventory.toy--; // Уменьшаем количество игрушек в инвентаре
            this.happiness++; // Увеличиваем уровень счастья
            this.hunger++; // Увеличиваем уровень голода
            this.updateMoneyDisplay(); // Обновляем отображение денег
            alert(`Питомец играл(а) и стал(а) чуточку голоднее!`);
        } else {
            alert("У вас нет игрушек! Купите игрушку в магазине.");
        }
    }

    sleep() {
        if (this.inventory.bed > 0) { // Проверяем наличие кровати в инвентаре
            this.tiredness--;
            this.money--;
            this.actionsCount++;
            if (this.actionsCount >= 5) {
                this.evolve();
            }
            this.inventory.bed--; // Уменьшаем количество кроватей в инвентаре
            this.happiness += 2; // Увеличиваем уровень счастья при сне
            this.hunger++; // Увеличиваем уровень голода при сне
            this.tiredness -= 2; // Уменьшаем уровень усталости при сне
            this.updateMoneyDisplay(); // Обновляем отображение денег
            alert(`Питомец поспал(а) и отдохнул(а)!`);
        } else {
            alert("У вас нет кровати! Купите кровать в магазине.");
        }
    }

    buyFood1() {
        this.money -= 5;
        this.inventory.food++;
        this.updateMoneyDisplay(); // Обновляем отображение денег
        alert("Вы купили еду!");
    }
    
    buyFood2() {
        this.money -= 5;
        this.inventory.food++;
        this.updateMoneyDisplay(); // Обновляем отображение денег
        alert("Вы купили еду!");
    }

    buyFood3() {
        this.money -= 5;
        this.inventory.food++;
        this.updateMoneyDisplay(); // Обновляем отображение денег
        alert("Вы купили еду!");
    }

    buyToy1() {
        this.money -= 5;
        this.inventory.toy++;
        this.updateMoneyDisplay(); // Обновляем отображение денег
        alert("Вы купили игрушку!");
    }

    buyToy2() {
        this.money -= 5;
        this.inventory.toy++;
        this.updateMoneyDisplay(); // Обновляем отображение денег
        alert("Вы купили игрушку!");
    }

    buyToy3() {
        this.money -= 5;
        this.inventory.toy++;
        this.updateMoneyDisplay(); // Обновляем отображение денег
        alert("Вы купили игрушку!");
    }

    buyBed1() {
        this.money -= 5;
        this.inventory.bed++;
        this.updateMoneyDisplay(); // Обновляем отображение денег
        alert("Вы купили кровать!");
    }

    buyBed2() {
        this.money -= 5;
        this.inventory.bed++;
        this.updateMoneyDisplay(); // Обновляем отображение денег
        alert("Вы купили кровать!");
    }

    buyBed3() {
        this.money -= 5;
        this.inventory.bed++;
        this.updateMoneyDisplay(); // Обновляем отображение денег
        alert("Вы купили кровать!");
    }

    checkStatus() {
        if (this.hunger > 5 || this.boredom > 5 || this.tiredness > 5) {
            alert(`Питомец умер :(`);
            return false;
        } else {
            alert(`Питомец счастлив!`);
            return true;
        }
    }

    evolve() {
        this.level++;
        this.actionsCount = 0; // Сбрасываем счетчик действий
        alert(`Питомец вырос! Уровень ${this.level}`);
    }
}

const tamagotchi = new Tamagotchi("Fluffy");

