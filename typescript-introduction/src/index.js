var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Spell = /** @class */ (function () {
    function Spell(name) {
        this._name = name;
    }
    Object.defineProperty(Spell.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return Spell;
}());
var FireSpellName;
(function (FireSpellName) {
    FireSpellName["FireBolt"] = "Fire Bolt";
    FireSpellName["FireWall"] = "Fire Wall";
    FireSpellName["BigBang"] = "Big Bang";
})(FireSpellName || (FireSpellName = {}));
var FrostSpellName;
(function (FrostSpellName) {
    FrostSpellName["FrostBolt"] = "Frost Bolt";
    FrostSpellName["Blizzard"] = "Blizzard";
})(FrostSpellName || (FrostSpellName = {}));
var FireSpell = /** @class */ (function (_super) {
    __extends(FireSpell, _super);
    function FireSpell(name) {
        var _this = _super.call(this, name) || this;
        _this.burningDamage = 20;
        return _this;
    }
    FireSpell.prototype.cast = function () {
        console.log(this.name, " - Boom you are burning the enemy! It took ".concat(this.burningDamage, " damage"));
    };
    return FireSpell;
}(Spell));
var FrostSpell = /** @class */ (function (_super) {
    __extends(FrostSpell, _super);
    function FrostSpell(name) {
        var _this = _super.call(this, name) || this;
        _this.slowingRate = 0.5;
        return _this;
    }
    FrostSpell.prototype.cast = function () {
        console.log(this.name, " - Brrr you are freezing the enemy, it's slowed by ".concat(this.slowingRate, " rate"));
    };
    return FrostSpell;
}(Spell));
var Wizard = /** @class */ (function () {
    function Wizard(spellBook) {
        this.spellBook = [];
        this.spellBook = spellBook;
    }
    Wizard.prototype.castAllAtOnce = function () {
        this.spellBook.forEach(function (spell) {
            spell.cast();
        });
    };
    Wizard.prototype.castFromSpellBook = function (name) {
        var spell = this.spellBook.find(function (spell) { return spell.name == name; });
        if (spell) {
            spell.cast();
        }
        else {
            throw new Error("You don't have this spell in your spell book!");
        }
    };
    return Wizard;
}());
var fireSpells = [
    new FireSpell(FireSpellName.FireBolt),
    new FireSpell(FireSpellName.FireWall),
];
var frostSpells = [
    new FrostSpell(FrostSpellName.FrostBolt),
    new FrostSpell(FrostSpellName.Blizzard),
];
var fireWizard = new Wizard(fireSpells);
var frostWizard = new Wizard(frostSpells);
fireWizard.castAllAtOnce();
try {
    fireWizard.castFromSpellBook(FireSpellName.BigBang);
}
catch (err) {
    //log(...data: any[]): void
    console.log("Error: ", err.message);
}
frostWizard.castAllAtOnce();
frostWizard.castFromSpellBook(FrostSpellName.Blizzard);
