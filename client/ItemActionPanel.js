/**
 * Created by Jerome Renaux (jerome.renaux@gmail.com) on 07-04-18.
 */

function ItemActionPanel(x,y,width,height,title){
    Panel.call(this,x,y,width,height,title);

    this.icon = new ItemSprite(this.x + 30, this.y + 30);
    this.text = this.addText(50, 20,'',Utils.colors.white,16);
    this.icon.showTooltip = false;
    this.button = new BigButton(this.x+20,this.y+50,'Equip',this.hide.bind(this));
}

ItemActionPanel.prototype = Object.create(Panel.prototype);
ItemActionPanel.prototype.constructor = ItemActionPanel;

ItemActionPanel.prototype.setUp = function(itemID){
    var data = Engine.itemsData[itemID];
    this.icon.setUp(itemID,data);
    this.text.setText(data.name);
    if(data.effects){
        this.button.setText(data.equipment ? 'Equip' : 'Use');
    }else{
        this.button.hide();
    }
};

ItemActionPanel.prototype.display = function(){
    Panel.prototype.display.call(this);
    this.icon.display();
    this.text.setVisible(true);
    this.button.display();
};

ItemActionPanel.prototype.hide = function(){
    Panel.prototype.hide.call(this);
    this.icon.hide();
    this.text.setVisible(false);
    this.button.hide();
};