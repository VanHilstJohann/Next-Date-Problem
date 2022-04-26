class Wardrobe {
	clothes = "none";
	check;
	value;
	wardrobeName;
	
  constructor() {}
  
	intro() {		
		var stdin = process.openStdin();
		console.log("Would you like to store clothes in the wardrobe? Yes (y) or No (n)");
		stdin.addListener('data', function (text) {
		var ans = text.toString().trim();
		console.log(ans)
		/*switch (ans.toLowerCase()) {
			case 'y':
				//process.exit(0);
				return;
				this.value = 1;
				this.check = 1;
				break;
				process.exit(0);
			case 'n':
				console.log("Have a nice day!");
				break;
				process.exit(0);
			default:
				console.log('Invalid answer!');
				break;
				process.exit(0);
		}
		return;*/
		if(ans == "y") {
				this.value = 1;
				this.check = 1;
				//return;
				//exit();
			}
			else {
				console.log("Have a nice day!");
				//return;return;
				//exit();
			}
			return;
			//exit();
		});
		//exit();
		return;
		return 0;
	}
	
	storage() {
		
		if(this.value == 1) {
			while (this.value == 1) {
				
				var fs = require("fs");
				
				console.log("Would you like to store clothes in the wardrobe? Yes (y) or No (n)");
				stdin.addListener('data', function (text) {
				var ans = text.toString().trim();
				if(ans == "y") {
						process.stdout.write('Shirt (s) or Pants (p): ');
						stdin.addListener('data', function (text) {
						var name = text.toString().trim();
						console.log('Your answer is: ' + name);
						switch (name.toLowerCase()) {
							case 's':
								//document.write("Shirt");
								fs.writeFile('wardrobe.txt', 'Shirt', function(err) {
									if (err) {
										return console.error(err);
									}
								});
								break;
							case 'p':
								//document.write("Pants");
								fs.writeFile('wardrobe.txt', 'Pants', function(err) {
									if (err) {
										return console.error(err);
									}
								});
								break;
							default:
								console.log('Invalid answer!');
								this.value = 0;
								return 0;
						}
						stdin.pause(); // stop reading
						});
				}});
				
				
			}
			return 0;
		}
	}
	
	print() {
		const start = Date.now(); // returns something like 138.899999998509884, which means 138.9 milliseconds passed
		if(this.check == 1) {
			console.log("Here is the contents of your wardrobe: ");
			fs.readFile('input.txt', function (err, data) {
				if (err) {
					return console.error(err);
				}
			console.log("Asynchronous read: " + data.toString());
			});
		}
		const duration = Date.now() - start;
	// report duration
		console.log(duration);
		return duration;
	}
};	

const ward1 = new Wardrobe;
ward1.intro();
ward1.storage();
ward1.print();
