<template>
  <div>
    <div id="chart" style="width: 600px; height: 400px"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelOption: {
        show: true,
        position: "insideBottom",
        distance: 15,
        align: "left",
        verticalAlign: "middle",
        rotate: 90,
        formatter: "{c}  {name|{a}}",
        fontSize: 16,
        rich: {
          name: {},
        },
      },
    };
  },
  mounted() {
    var myChart = this.$echarts.init(document.getElementById("chart"));
    myChart.setOption({
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      legend: {
        data: ["Forest", "Steppe", "Desert", "Wetland"],
      },
      xAxis: [
        {
          type: "category",
          axisTick: { show: false },
          data: ["2012", "2013", "2014", "2015", "2016"],
        },
      ],
      yAxis: [
        {
          type: "value",
        },
      ],
      series: [
        {
          name: "Forest",
          type: "bar",
          barGap: 0,
          label: this.labelOption,
          emphasis: {
            focus: "series",
          },
          data: [320, 332, 301, 334, 390],
        },
        {
          name: "Steppe",
          type: "bar",
          label: this.labelOption,
          emphasis: {
            focus: "series",
          },
          data: [220, 182, 191, 234, 290],
        },
        {
          name: "Desert",
          type: "bar",
          label: this.labelOption,
          emphasis: {
            focus: "series",
          },
          data: [150, 232, 201, 154, 190],
        },
        {
          name: "Wetland",
          type: "bar",
          label: this.labelOption,
          emphasis: {
            focus: "series",
          },
          data: [98, 77, 101, 99, 40],
        },
      ],
    });
  },
};
</script>