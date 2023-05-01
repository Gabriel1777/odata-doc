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

	const initTheme = () => {
		if (localStorage.getItem('theme') == 'dark') {
			$('#dark-button').addClass('active');
			$('head').append('<link rel="stylesheet" id="dark-css" href="css/dark.css"/>');
		} else {
			$('#dark-css').remove();
			$('#light-button').addClass('active');
		}
	}

	const itemClick = (e) => {
		$('.panel-body ul li').removeClass('active');
		e?.target?.parentNode?.classList.add('active');
	};

	$('.left-panel ul li a').on('click', itemClick);

	$('#dark-button').on('click', (e) => {
		e.preventDefault();
		$('.container-theme-button a').removeClass('active');
		e.target?.parentNode?.classList.add('active');

		if ($('#dark-css').length <= 0) {
			localStorage.setItem('theme', 'dark');
			$('head').append('<link rel="stylesheet" id="dark-css" href="css/dark.css"/>');
		}
	});	

	$('#light-button').on('click', (e) => {
		e.preventDefault();
		$('.container-theme-button a').removeClass('active');
		e.target?.parentNode?.classList.add('active');
		localStorage.setItem('theme', 'light');
		$('#dark-css').remove();
	});

	$(window).scroll(() => {
		for (i = 0; i < offsets?.length; i++) {
			if ($(window).scrollTop() >= (offsets[i] - 30)) {
				$('.panel-body ul li').removeClass('active');
				$(`.panel-body ul li a[href=#${items[i]?.id}]`).parent().addClass('active');
			}
		}
	});

	setOffsets();
	initTheme();
});