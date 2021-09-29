import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Inputstyle,
  Linktext,
  Positionstyle,
  Transstyle,
  Wrapperstyle,
} from "./style";
import { Select } from "antd";

function Translator() {
  const [state, setstate] = useState([]);

  const getDictionary = (e) => {
    const selectValue = document.getElementById("select").value;
    const apiKey =
      "dict.1.1.20210915T143839Z.96e17f7f60ad28d4.e1bf52d3b734ee95be20a7e82dfe268e2601fce7";
    axios
      .get(
        `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${apiKey}&lang=${selectValue}&text=${e.target.value}`
      )
      .then((res) => {
        console.log(res.data);
        setstate(res.data.def);
      })

      .catch();
  };

  useEffect(() => {
    // getwords();
  }, []);

  const { Option } = Select;

  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onBlur() {
    console.log("blur");
  }

  function onFocus() {
    console.log("focus");
  }

  function onSearch(val) {
    console.log("search:", val);
  }

  return (
    <Wrapperstyle>
      <Inputstyle>
        <Positionstyle>
          <textarea
            onChange={getDictionary}
            placeholder="Type something to translate"
            name="translate_word"
            id="textarea"
            autoFocus
          ></textarea>
        </Positionstyle>
        <Linktext>
          Powered by <a href="https://yandex.com/dev/dictionary/">Yandex</a>
        </Linktext>
      </Inputstyle>
      <Select
        id="select"
        // defaultValue="en-ru"
        name="select"
        showSearch
        style={{ width: 200 }}
        placeholder="Select language"
        optionFilterProp="children"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSearch={onSearch}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option value="ru-ru">Russian ➞ Russian </Option>

        <Option value="ru-en">Russian ➞ English </Option>
        <Option value="ru-pl">Russian ➞ Polandish </Option>
        <Option value="ru-uk">Russian ➞ Ukrainian </Option>
        <Option value="ru-de">Russian ➞ German </Option>
        <Option value="ru-fr">Russian ➞ French </Option>
        <Option value="ru-es">Russian ➞ Spanish </Option>
        <Option value="ru-it">Russian ➞ Italian </Option>
        <Option value="ru-tr">Russian ➞ Turkish </Option>
        <Option value="en-ru">English ➞ Russian </Option>
        <Option value="en-en">English ➞ English </Option>
        <Option value="en-de">English ➞ German </Option>
        <Option value="en-fr">English ➞ French </Option>
        <Option value="en-es">English ➞ Spanish </Option>
        <Option value="en-it">English ➞ Italian </Option>
        <Option value="en-tr">English ➞ Turkish </Option>
        <Option value="pl-ru">Polandish ➞ Russian </Option>
        <Option value="uk-ru">Ukrainian ➞ Russian </Option>
        <Option value="de-ru">German ➞ Russian </Option>
        <Option value="de-en">German ➞ English </Option>
        <Option value="fr-ru">French ➞ Russian </Option>
        <Option value="fr-en">French ➞ English </Option>
        <Option value="es-ru">Spanish ➞ Russian </Option>
        <Option value="es-en">Spanish ➞ English </Option>
        <Option value="it-ru">Italian ➞ Russian </Option>
        <Option value="it-en">Italian ➞ English </Option>
        <Option value="tr-ru">Turkish ➞ Russian </Option>
        <Option value="tr-en">Turkish ➞ English </Option>
      </Select>
      <Transstyle>
        <ul>
          {state.map((value) => (
            <ol>
              <b>{value?.text}</b> [{value?.ts}] {value?.pos}
              {value?.tr.map((item) => (
                <li>
                  <span style={{ color: "blue", marginRight: "10px" }}>
                    {item.text}
                  </span>
                  {item.gen},
                  {/* {item?.syn.map((syntacse) => (
                    <span>
                      {syntacse?.text} {syntacse.gen}
                      <br />
                    </span>
                  ))} */}
                </li>
              ))}
            </ol>
          ))}
        </ul>
      </Transstyle>
    </Wrapperstyle>
  );
}

export default Translator;
