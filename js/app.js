$(document).on('ready', function () {

	var offsets = [];
	var items = $('.menu-item');

	const setOffsets = () => {
		for (i = 0; i < items?.length; i++) {
			let el = $(items[i]);
			let pos = el?.offset()?.top;
			if (pos)
				offsets.push(pos);
		}
	}

	const itemClick = (e) => {
		$('.panel-body ul li').removeClass('active');
		e?.target?.parentNode?.setAttribute('class','active');
	};

	const scrollItem = (e) => {
		var position = $(e.target).offset().top;

	    if ($(window).scrollTop() == position) {
	    	$('.panel-body ul li').removeClass('active');
			e?.target?.parentNode?.setAttribute('class','active');
	    }
	};

	$('.left-panel ul li a').on('click', itemClick);

	$(window).scroll(() => {
		for (i = 0; i < offsets?.length; i++) {
			if ($(window).scrollTop() >= (offsets[i] - 30)) {
				$('.panel-body ul li').removeClass('active');
				$(`.panel-body ul li a[href=#${items[i]?.id}]`).parent().addClass('active');
			}
		}
	});

	setOffsets();
});