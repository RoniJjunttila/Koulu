class BACCalculator {
    calculateBAC(alcoholConsumedGrams: number, bodyWeightKg: number, gender: 'male' | 'female', hoursSinceLastDrink: number): number {
        const r = gender === 'male' ? 0.68 : 0.55;
        const gramsOfAlcoholInBody = alcoholConsumedGrams - (r * bodyWeightKg * hoursSinceLastDrink);
        const bac = gramsOfAlcoholInBody / (bodyWeightKg * 1000);
        return Math.max(0, bac);
    }

    getBACStatus(bac: number): string {
        if (bac < 0.02) {
            return 'Sober';
        } else if (bac >= 0.02 && bac < 0.08) {
            return 'Mild impairment';
        } else if (bac >= 0.08 && bac < 0.15) {
            return 'Significant impairment';
        } else {
            return 'Severe impairment';
        }
    }
}

const bacCalculator = new BACCalculator();

const alcoholConsumedGrams = 20; 
const bodyWeightKg = 70; 
const gender = 'male';
const hoursSinceLastDrink = 2;

const bacResult = bacCalculator.calculateBAC(alcoholConsumedGrams, bodyWeightKg, gender, hoursSinceLastDrink);
const bacStatus = bacCalculator.getBACStatus(bacResult);

console.log(`BAC: ${bacResult.toFixed(4)}`);
console.log(`Status: ${bacStatus}`);
