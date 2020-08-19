print("Test [accent] TEST []");
this.global.liquids = [];
this.global.items = [];
for(var i = 0; i < Vars.content.items().size; i++){
	var item = Vars.content.items().get(i);
	if(item == null) return;
	this.global.items.push(item);
	var liquid = new Liquid(item.icon(Cicon.medium).name, item.color);
	liquid.localizedName = "Molten " + item.localizedName;
	liquid.flammability = 0.1;
	liquid.temperature = 0.6;
	liquid.heatCapacity = 0.3;
	liquid.viscosity = 0.5;
	this.global.liquids.push(liquid);
};
