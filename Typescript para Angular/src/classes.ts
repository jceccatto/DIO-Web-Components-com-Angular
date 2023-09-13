//classes

    /*
        data modifiers:
        public - todos conseguem ver
        private - apenas a classe consegue ver
        protected - apenas a classe original e aquelas que herdarem o metodo podem ver(classes e subclasses)
    */

        class Character{
            //com o ? o name fica opcional
            name?: string;
            strength: number;
            skill: number;
            //como o name é opciona, nao precisa passar ele na hora da criacao
            constructor(name: string, strength: number, skill: number){
                this.name = name;
                this.strength = strength;
                this.skill = skill;
            }
    
            attack() : void{
                console.log(`attack with ${this.strength} points`);
            }
        }
    
        //Character: superclass
        //Magician: subclass
        class Magician extends Character{
            magicPoints: number;
            constructor(
                name: string, 
                strength: number, 
                skill: number, 
                magicPoints: number
                ) {
                super(name, strength, skill);
                this.magicPoints = magicPoints;
            }
        }
    
        const p1 = new Character("Ryu",10, 98);
        const p2 = new Magician("Mago", 9, 30, 100);
        console.log(p1)
        p1.attack();