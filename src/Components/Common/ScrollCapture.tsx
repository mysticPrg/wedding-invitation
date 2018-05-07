import * as React from 'react';

interface IState {
	scroll: number;
}

interface IProp {
  render: (scroll: number) => JSX.Element;
}

class ScrollCapture extends React.Component<IProp, IState> {
  
  public state: IState = {
		scroll: 0,
	};

	public componentDidMount() {
		window.addEventListener('scroll', this.onScroll);
	}

	public componentWillUnmount() {
		window.removeEventListener('scroll', this.onScroll);
	}

	public render() {
    const { scroll } = this.state;
    const { render } = this.props;

		return render(scroll);
	}

	private onScroll = () => {
		const { scrollY: scroll } = window;
		this.setState({ scroll });
	}
}

export default ScrollCapture;
