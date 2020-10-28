import Head from 'next/head'

export default function Home() {
  return (
    <div className="wrapper">
      <div className="container">
        <header>
          <h1>
            <img alt="JPEGasus logo" src="img/jpegasus-logo-reversed.png" />
          </h1>
          <form>
            <label>
              <strong>Max Height</strong>
              <select id="maxHeightSelector" value="1000">
                  <option value="10000">10000</option>
                  <option value="9900">9900</option>
                  <option value="9800">9800</option>
                  <option value="9700">9700</option>
                  <option value="9600">9600</option>
                  <option value="9500">9500</option>
                  <option value="9400">9400</option>
                  <option value="9300">9300</option>
                  <option value="9200">9200</option>
                  <option value="9100">9100</option>
                  <option value="9000">9000</option>
                  <option value="8900">8900</option>
                  <option value="8800">8800</option>
                  <option value="8700">8700</option>
                  <option value="8600">8600</option>
                  <option value="8500">8500</option>
                  <option value="8400">8400</option>
                  <option value="8300">8300</option>
                  <option value="8200">8200</option>
                  <option value="8100">8100</option>
                  <option value="8000">8000</option>
                  <option value="7900">7900</option>
                  <option value="7800">7800</option>
                  <option value="7700">7700</option>
                  <option value="7600">7600</option>
                  <option value="7500">7500</option>
                  <option value="7400">7400</option>
                  <option value="7300">7300</option>
                  <option value="7200">7200</option>
                  <option value="7100">7100</option>
                  <option value="7000">7000</option>
                  <option value="6900">6900</option>
                  <option value="6800">6800</option>
                  <option value="6700">6700</option>
                  <option value="6600">6600</option>
                  <option value="6500">6500</option>
                  <option value="6400">6400</option>
                  <option value="6300">6300</option>
                  <option value="6200">6200</option>
                  <option value="6100">6100</option>
                  <option value="6000">6000</option>
                  <option value="5900">5900</option>
                  <option value="5800">5800</option>
                  <option value="5700">5700</option>
                  <option value="5600">5600</option>
                  <option value="5500">5500</option>
                  <option value="5400">5400</option>
                  <option value="5300">5300</option>
                  <option value="5200">5200</option>
                  <option value="5100">5100</option>
                  <option value="5000">5000</option>
                  <option value="4900">4900</option>
                  <option value="4800">4800</option>
                  <option value="4700">4700</option>
                  <option value="4600">4600</option>
                  <option value="4500">4500</option>
                  <option value="4400">4400</option>
                  <option value="4300">4300</option>
                  <option value="4200">4200</option>
                  <option value="4100">4100</option>
                  <option value="4000">4000</option>
                  <option value="3900">3900</option>
                  <option value="3800">3800</option>
                  <option value="3700">3700</option>
                  <option value="3600">3600</option>
                  <option value="3500">3500</option>
                  <option value="3400">3400</option>
                  <option value="3300">3300</option>
                  <option value="3200">3200</option>
                  <option value="3100">3100</option>
                  <option value="3000">3000</option>
                  <option value="2900">2900</option>
                  <option value="2800">2800</option>
                  <option value="2700">2700</option>
                  <option value="2600">2600</option>
                  <option value="2500">2500</option>
                  <option value="2400">2400</option>
                  <option value="2300">2300</option>
                  <option value="2200">2200</option>
                  <option value="2100">2100</option>
                  <option value="2000">2000</option>
                  <option value="1900">1900</option>
                  <option value="1800">1800</option>
                  <option value="1700">1700</option>
                  <option value="1600">1600</option>
                  <option value="1500">1500</option>
                  <option value="1400">1400</option>
                  <option value="1300">1300</option>
                  <option value="1200">1200</option>
                  <option value="1100">1100</option>
                  <option value="1000">1000</option>
                  <option value="900">900</option>
                  <option value="800">800</option>
                  <option value="700">700</option>
                  <option value="600">600</option>
                  <option value="500">500</option>
                  <option value="400">400</option>
                  <option value="300">300</option>
                  <option value="200">200</option>
                  <option value="100">100</option>
                </select>
              </label>
              <label>
                 <strong>Max Width</strong>
                 <select id="maxWidthSelector" value="1000">
                    <option value="10000">10000</option>
                    <option value="9900">9900</option>
                    <option value="9800">9800</option>
                    <option value="9700">9700</option>
                    <option value="9600">9600</option>
                    <option value="9500">9500</option>
                    <option value="9400">9400</option>
                    <option value="9300">9300</option>
                    <option value="9200">9200</option>
                    <option value="9100">9100</option>
                    <option value="9000">9000</option>
                    <option value="8900">8900</option>
                    <option value="8800">8800</option>
                    <option value="8700">8700</option>
                    <option value="8600">8600</option>
                    <option value="8500">8500</option>
                    <option value="8400">8400</option>
                    <option value="8300">8300</option>
                    <option value="8200">8200</option>
                    <option value="8100">8100</option>
                    <option value="8000">8000</option>
                    <option value="7900">7900</option>
                    <option value="7800">7800</option>
                    <option value="7700">7700</option>
                    <option value="7600">7600</option>
                    <option value="7500">7500</option>
                    <option value="7400">7400</option>
                    <option value="7300">7300</option>
                    <option value="7200">7200</option>
                    <option value="7100">7100</option>
                    <option value="7000">7000</option>
                    <option value="6900">6900</option>
                    <option value="6800">6800</option>
                    <option value="6700">6700</option>
                    <option value="6600">6600</option>
                    <option value="6500">6500</option>
                    <option value="6400">6400</option>
                    <option value="6300">6300</option>
                    <option value="6200">6200</option>
                    <option value="6100">6100</option>
                    <option value="6000">6000</option>
                    <option value="5900">5900</option>
                    <option value="5800">5800</option>
                    <option value="5700">5700</option>
                    <option value="5600">5600</option>
                    <option value="5500">5500</option>
                    <option value="5400">5400</option>
                    <option value="5300">5300</option>
                    <option value="5200">5200</option>
                    <option value="5100">5100</option>
                    <option value="5000">5000</option>
                    <option value="4900">4900</option>
                    <option value="4800">4800</option>
                    <option value="4700">4700</option>
                    <option value="4600">4600</option>
                    <option value="4500">4500</option>
                    <option value="4400">4400</option>
                    <option value="4300">4300</option>
                    <option value="4200">4200</option>
                    <option value="4100">4100</option>
                    <option value="4000">4000</option>
                    <option value="3900">3900</option>
                    <option value="3800">3800</option>
                    <option value="3700">3700</option>
                    <option value="3600">3600</option>
                    <option value="3500">3500</option>
                    <option value="3400">3400</option>
                    <option value="3300">3300</option>
                    <option value="3200">3200</option>
                    <option value="3100">3100</option>
                    <option value="3000">3000</option>
                    <option value="2900">2900</option>
                    <option value="2800">2800</option>
                    <option value="2700">2700</option>
                    <option value="2600">2600</option>
                    <option value="2500">2500</option>
                    <option value="2400">2400</option>
                    <option value="2300">2300</option>
                    <option value="2200">2200</option>
                    <option value="2100">2100</option>
                    <option value="2000">2000</option>
                    <option value="1900">1900</option>
                    <option value="1800">1800</option>
                    <option value="1700">1700</option>
                    <option value="1600">1600</option>
                    <option value="1500">1500</option>
                    <option value="1400">1400</option>
                    <option value="1300">1300</option>
                    <option value="1200">1200</option>
                    <option value="1100">1100</option>
                    <option defaultValue="1000">1000</option>
                    <option value="900">900</option>
                    <option value="800">800</option>
                    <option value="700">700</option>
                    <option value="600">600</option>
                    <option value="500">500</option>
                    <option value="400">400</option>
                    <option value="300">300</option>
                    <option value="200">200</option>
                    <option value="100">100</option>
                 </select>
              </label>
              <label>
                 <strong>Scale Image By</strong>
                 <select id="scaleImageBy" value="1">
                    <option value="2">2</option>
                    <option value="1.99">1.99</option>
                    <option value="1.98">1.98</option>
                    <option value="1.97">1.97</option>
                    <option value="1.96">1.96</option>
                    <option value="1.95">1.95</option>
                    <option value="1.94">1.94</option>
                    <option value="1.93">1.93</option>
                    <option value="1.92">1.92</option>
                    <option value="1.91">1.91</option>
                    <option value="1.9">1.9</option>
                    <option value="1.89">1.89</option>
                    <option value="1.88">1.88</option>
                    <option value="1.87">1.87</option>
                    <option value="1.86">1.86</option>
                    <option value="1.85">1.85</option>
                    <option value="1.84">1.84</option>
                    <option value="1.83">1.83</option>
                    <option value="1.82">1.82</option>
                    <option value="1.81">1.81</option>
                    <option value="1.8">1.8</option>
                    <option value="1.79">1.79</option>
                    <option value="1.78">1.78</option>
                    <option value="1.77">1.77</option>
                    <option value="1.76">1.76</option>
                    <option value="1.75">1.75</option>
                    <option value="1.74">1.74</option>
                    <option value="1.73">1.73</option>
                    <option value="1.72">1.72</option>
                    <option value="1.71">1.71</option>
                    <option value="1.7">1.7</option>
                    <option value="1.69">1.69</option>
                    <option value="1.68">1.68</option>
                    <option value="1.67">1.67</option>
                    <option value="1.66">1.66</option>
                    <option value="1.65">1.65</option>
                    <option value="1.64">1.64</option>
                    <option value="1.63">1.63</option>
                    <option value="1.62">1.62</option>
                    <option value="1.61">1.61</option>
                    <option value="1.6">1.6</option>
                    <option value="1.59">1.59</option>
                    <option value="1.58">1.58</option>
                    <option value="1.57">1.57</option>
                    <option value="1.56">1.56</option>
                    <option value="1.55">1.55</option>
                    <option value="1.54">1.54</option>
                    <option value="1.53">1.53</option>
                    <option value="1.52">1.52</option>
                    <option value="1.51">1.51</option>
                    <option value="1.5">1.5</option>
                    <option value="1.49">1.49</option>
                    <option value="1.48">1.48</option>
                    <option value="1.47">1.47</option>
                    <option value="1.46">1.46</option>
                    <option value="1.45">1.45</option>
                    <option value="1.44">1.44</option>
                    <option value="1.43">1.43</option>
                    <option value="1.42">1.42</option>
                    <option value="1.41">1.41</option>
                    <option value="1.4">1.4</option>
                    <option value="1.39">1.39</option>
                    <option value="1.38">1.38</option>
                    <option value="1.37">1.37</option>
                    <option value="1.36">1.36</option>
                    <option value="1.35">1.35</option>
                    <option value="1.34">1.34</option>
                    <option value="1.33">1.33</option>
                    <option value="1.32">1.32</option>
                    <option value="1.31">1.31</option>
                    <option value="1.3">1.3</option>
                    <option value="1.29">1.29</option>
                    <option value="1.28">1.28</option>
                    <option value="1.27">1.27</option>
                    <option value="1.26">1.26</option>
                    <option value="1.25">1.25</option>
                    <option value="1.24">1.24</option>
                    <option value="1.23">1.23</option>
                    <option value="1.22">1.22</option>
                    <option value="1.21">1.21</option>
                    <option value="1.2">1.2</option>
                    <option value="1.19">1.19</option>
                    <option value="1.18">1.18</option>
                    <option value="1.17">1.17</option>
                    <option value="1.16">1.16</option>
                    <option value="1.15">1.15</option>
                    <option value="1.14">1.14</option>
                    <option value="1.13">1.13</option>
                    <option value="1.12">1.12</option>
                    <option value="1.11">1.11</option>
                    <option value="1.1">1.1</option>
                    <option value="1.09">1.09</option>
                    <option value="1.08">1.08</option>
                    <option value="1.07">1.07</option>
                    <option value="1.06">1.06</option>
                    <option value="1.05">1.05</option>
                    <option value="1.04">1.04</option>
                    <option value="1.03">1.03</option>
                    <option value="1.02">1.02</option>
                    <option value="1.01">1.01</option>
                    <option defaultValue="1">1</option>
                    <option value="0.99">0.99</option>
                    <option value="0.98">0.98</option>
                    <option value="0.97">0.97</option>
                    <option value="0.96">0.96</option>
                    <option value="0.95">0.95</option>
                    <option value="0.94">0.94</option>
                    <option value="0.93">0.93</option>
                    <option value="0.92">0.92</option>
                    <option value="0.91">0.91</option>
                    <option value="0.9">0.9</option>
                    <option value="0.89">0.89</option>
                    <option value="0.88">0.88</option>
                    <option value="0.87">0.87</option>
                    <option value="0.86">0.86</option>
                    <option value="0.85">0.85</option>
                    <option value="0.84">0.84</option>
                    <option value="0.83">0.83</option>
                    <option value="0.82">0.82</option>
                    <option value="0.81">0.81</option>
                    <option value="0.8">0.8</option>
                    <option value="0.79">0.79</option>
                    <option value="0.78">0.78</option>
                    <option value="0.77">0.77</option>
                    <option value="0.76">0.76</option>
                    <option value="0.75">0.75</option>
                    <option value="0.74">0.74</option>
                    <option value="0.73">0.73</option>
                    <option value="0.72">0.72</option>
                    <option value="0.71">0.71</option>
                    <option value="0.7">0.7</option>
                    <option value="0.69">0.69</option>
                    <option value="0.68">0.68</option>
                    <option value="0.67">0.67</option>
                    <option value="0.66">0.66</option>
                    <option value="0.65">0.65</option>
                    <option value="0.64">0.64</option>
                    <option value="0.63">0.63</option>
                    <option value="0.62">0.62</option>
                    <option value="0.61">0.61</option>
                    <option value="0.6">0.6</option>
                    <option value="0.59">0.59</option>
                    <option value="0.58">0.58</option>
                    <option value="0.57">0.57</option>
                    <option value="0.56">0.56</option>
                    <option value="0.55">0.55</option>
                    <option value="0.54">0.54</option>
                    <option value="0.53">0.53</option>
                    <option value="0.52">0.52</option>
                    <option value="0.51">0.51</option>
                    <option value="0.5">0.5</option>
                    <option value="0.49">0.49</option>
                    <option value="0.48">0.48</option>
                    <option value="0.47">0.47</option>
                    <option value="0.46">0.46</option>
                    <option value="0.45">0.45</option>
                    <option value="0.44">0.44</option>
                    <option value="0.43">0.43</option>
                    <option value="0.42">0.42</option>
                    <option value="0.41">0.41</option>
                    <option value="0.4">0.4</option>
                    <option value="0.39">0.39</option>
                    <option value="0.38">0.38</option>
                    <option value="0.37">0.37</option>
                    <option value="0.36">0.36</option>
                    <option value="0.35">0.35</option>
                    <option value="0.34">0.34</option>
                    <option value="0.33">0.33</option>
                    <option value="0.32">0.32</option>
                    <option value="0.31">0.31</option>
                    <option value="0.3">0.3</option>
                    <option value="0.29">0.29</option>
                    <option value="0.28">0.28</option>
                    <option value="0.27">0.27</option>
                    <option value="0.26">0.26</option>
                    <option value="0.25">0.25</option>
                    <option value="0.24">0.24</option>
                    <option value="0.23">0.23</option>
                    <option value="0.22">0.22</option>
                    <option value="0.21">0.21</option>
                    <option value="0.2">0.2</option>
                    <option value="0.19">0.19</option>
                    <option value="0.18">0.18</option>
                    <option value="0.17">0.17</option>
                    <option value="0.16">0.16</option>
                    <option value="0.15">0.15</option>
                    <option value="0.14">0.14</option>
                    <option value="0.13">0.13</option>
                    <option value="0.12">0.12</option>
                    <option value="0.11">0.11</option>
                    <option value="0.1">0.1</option>
                    <option value="0.09">0.09</option>
                    <option value="0.08">0.08</option>
                    <option value="0.07">0.07</option>
                    <option value="0.06">0.06</option>
                    <option value="0.05">0.05</option>
                    <option value="0.04">0.04</option>
                    <option value="0.03">0.03</option>
                    <option value="0.02">0.02</option>
                    <option value="0.01">0.01</option>
                 </select>
              </label>
              <label>
                 <strong>Quality</strong>
                 <select id="qualitySelector" value="0.65">
                    <option value="1">1</option>
                    <option value="0.99">0.99</option>
                    <option value="0.98">0.98</option>
                    <option value="0.97">0.97</option>
                    <option value="0.96">0.96</option>
                    <option value="0.95">0.95</option>
                    <option value="0.94">0.94</option>
                    <option value="0.93">0.93</option>
                    <option value="0.92">0.92</option>
                    <option value="0.91">0.91</option>
                    <option value="0.9">0.9</option>
                    <option value="0.89">0.89</option>
                    <option value="0.88">0.88</option>
                    <option value="0.87">0.87</option>
                    <option value="0.86">0.86</option>
                    <option value="0.85">0.85</option>
                    <option value="0.84">0.84</option>
                    <option value="0.83">0.83</option>
                    <option value="0.82">0.82</option>
                    <option value="0.81">0.81</option>
                    <option value="0.8">0.8</option>
                    <option value="0.79">0.79</option>
                    <option value="0.78">0.78</option>
                    <option value="0.77">0.77</option>
                    <option value="0.76">0.76</option>
                    <option value="0.75">0.75</option>
                    <option value="0.74">0.74</option>
                    <option value="0.73">0.73</option>
                    <option value="0.72">0.72</option>
                    <option value="0.71">0.71</option>
                    <option value="0.7">0.7</option>
                    <option value="0.69">0.69</option>
                    <option value="0.68">0.68</option>
                    <option value="0.67">0.67</option>
                    <option value="0.66">0.66</option>
                    <option value="0.65">0.65</option>
                    <option value="0.64">0.64</option>
                    <option value="0.63">0.63</option>
                    <option value="0.62">0.62</option>
                    <option value="0.61">0.61</option>
                    <option value="0.6">0.6</option>
                    <option value="0.59">0.59</option>
                    <option value="0.58">0.58</option>
                    <option value="0.57">0.57</option>
                    <option value="0.56">0.56</option>
                    <option value="0.55">0.55</option>
                    <option value="0.54">0.54</option>
                    <option value="0.53">0.53</option>
                    <option value="0.52">0.52</option>
                    <option value="0.51">0.51</option>
                    <option value="0.5">0.5</option>
                    <option value="0.49">0.49</option>
                    <option value="0.48">0.48</option>
                    <option value="0.47">0.47</option>
                    <option value="0.46">0.46</option>
                    <option value="0.45">0.45</option>
                    <option value="0.44">0.44</option>
                    <option value="0.43">0.43</option>
                    <option value="0.42">0.42</option>
                    <option value="0.41">0.41</option>
                    <option value="0.4">0.4</option>
                    <option value="0.39">0.39</option>
                    <option value="0.38">0.38</option>
                    <option value="0.37">0.37</option>
                    <option value="0.36">0.36</option>
                    <option value="0.35">0.35</option>
                    <option value="0.34">0.34</option>
                    <option value="0.33">0.33</option>
                    <option value="0.32">0.32</option>
                    <option value="0.31">0.31</option>
                    <option value="0.3">0.3</option>
                    <option value="0.29">0.29</option>
                    <option value="0.28">0.28</option>
                    <option value="0.27">0.27</option>
                    <option value="0.26">0.26</option>
                    <option value="0.25">0.25</option>
                    <option value="0.24">0.24</option>
                    <option value="0.23">0.23</option>
                    <option value="0.22">0.22</option>
                    <option value="0.21">0.21</option>
                    <option value="0.2">0.2</option>
                    <option value="0.19">0.19</option>
                    <option value="0.18">0.18</option>
                    <option value="0.17">0.17</option>
                    <option value="0.16">0.16</option>
                    <option value="0.15">0.15</option>
                    <option value="0.14">0.14</option>
                    <option value="0.13">0.13</option>
                    <option value="0.12">0.12</option>
                    <option value="0.11">0.11</option>
                    <option value="0.1">0.1</option>
                    <option value="0.09">0.09</option>
                    <option value="0.08">0.08</option>
                    <option value="0.07">0.07</option>
                    <option value="0.06">0.06</option>
                    <option value="0.05">0.05</option>
                    <option value="0.04">0.04</option>
                    <option value="0.03">0.03</option>
                    <option value="0.02">0.02</option>
                    <option value="0.01">0.01</option>
                 </select>
              </label>
              <label>
                 <strong>Return original if compressed file is larger</strong>
                 <select id="returnOriginalIfCompressedFileIsLargerSelector" value="false">
                    <option value="false">false</option>
                    <option value="true">true</option>
                 </select>
              </label>
              <label>
                 <strong>Return original on failure</strong>
                 <select id="returnOriginalOnFailureSelector" value="true">
                    <option value="true">true</option>
                    <option value="false">false</option>
                 </select>
              </label>
              <label>
                 <strong>Fix image orientation</strong>
                 <select id="fixImageOrientation" value="true">
                    <option value="true">true</option>
                    <option value="false">false</option>
                 </select>
              </label>
              <label>
                 <strong>Preserve file type</strong>
                 <select id="preserveFileType" value="false">
                    <option value="true">true</option>
                    <option value="false">false</option>
                 </select>
              </label>
              <label>
                 <strong>Transparency fill color</strong>
                 <input type="text" id="transparencyFillColor" value="#FFF" />
              </label>
              <label>
                 <strong>Upload Image</strong>
                 <input type="file" id="imageInput" />
              </label>
              <input type="button" value="Submit" />
              <table>
                 <thead>
                    <tr>
                       <th>&nbsp;</th>
                       <th>Size (kb)</th>
                       <th>Type</th>
                       <th>Orientation</th>
                    </tr>
                 </thead>
                 <tbody>
                    <tr>
                       <td><strong>Original</strong></td>
                       <td id="originalSize">—</td>
                       <td id="originalType">—</td>
                       <td id="originalOrientation">—</td>
                    </tr>
                    <tr>
                       <td><strong>Compressed</strong></td>
                       <td id="compressedSize">—</td>
                       <td id="compressedType">—</td>
                       <td id="compressedOrientation">—</td>
                    </tr>
                 </tbody>
              </table>
           </form>
        </header>
        <main role="main">
           <span id="compressedImageSpan">
             Please upload an image to see a preview here
           </span>
        </main>
     </div>
  </div>
  )
}
