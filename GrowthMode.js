// var D_FIXED_ZERO = false;
// var D_FIXED_MODE = true;

	ExperienceControl._createGrowthArray = function(unit) {
		var i, n;
		var count = ParamGroup.getParameterCount();
		var growthArray = [];
		var weapon = ItemControl.getEquippedWeapon(unit);
		if (this._unitGrowths === undefined) {
			this._unitGrowths = [,];
		}
		
		for (i = 0; i < count; i++) {
			var globalParameter = root.getMetaSession().global;
			if (globalParameter.zeroGrowth) {
				growthArray[i] = 0;
			} else if (globalParameter.fixedGrowth) {
				// Calculate the growth value (or the growth rate).
				n = ParamGroup.getGrowthBonus(unit, i) + ParamGroup.getUnitTotalGrowthBonus(unit, i, weapon);
				
				// Set the rise value.
				if (this._unitGrowths[unit, i] === undefined) {
					// this._unitGrowths[unit, i] = (unit.getLv() - 1) * n % 100;
					this._unitGrowths[unit, i] = (((unit.getLv() - 2) * ParamGroup.getGrowthBonus(unit, i)) + 50) % 100;
				}
				this._unitGrowths[unit, i] += n;
				var j = this._unitGrowths[unit, i];
				if (n != 0) {
					root.log('unit: ' + unit + ' / stat: ' + i + ' / growth: ' + j);
				}
				if (j > 0) {
					j = Math.floor(j / 100)
					this._unitGrowths[unit, i] -= j*100;
				} else {
					j = 0;
					// this._unitGrowths[unit, i] = 0;
				}
				growthArray[i] = j;
				// growthArray[i] = this._unitGrowths[unit, i];
			} else {
				// Calculate the growth value (or the growth rate).
				n = ParamGroup.getGrowthBonus(unit, i) + ParamGroup.getUnitTotalGrowthBonus(unit, i, weapon);
				
				// Set the rise value.
				growthArray[i] = this._getGrowthValue(n);
			}
		}
	
		return growthArray;
	}
	
