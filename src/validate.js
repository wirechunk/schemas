'use strict';
export const validateContextData = validate20;
const schema31 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/context-data/context-data.json',
  title: 'ContextData',
  type: 'object',
  additionalProperties: { $ref: '#/$defs/dataValue' },
  $defs: {
    timeDuration: {
      type: 'object',
      properties: {
        hours: { oneOf: [{ type: 'number' }, { type: 'null' }] },
        minutes: { oneOf: [{ type: 'number' }, { type: 'null' }] },
      },
      required: ['hours', 'minutes'],
    },
    dataValue: {
      anyOf: [
        { type: 'boolean' },
        { type: 'string' },
        { type: 'number' },
        { type: 'null' },
        { $ref: '#/$defs/timeDuration' },
        { type: 'array', items: { $ref: '#/$defs/dataTableRow' } },
        { $ref: '#/$defs/uploadedFile' },
        { type: 'array', items: { type: 'string' } },
      ],
    },
    dataTableRow: {
      type: 'object',
      properties: { id: { type: 'string' }, data: { $ref: '#' } },
      required: ['id', 'data'],
    },
    uploadedFile: {
      type: 'object',
      properties: { fileId: { type: 'string' } },
      required: ['fileId'],
    },
  },
};
const schema32 = {
  anyOf: [
    { type: 'boolean' },
    { type: 'string' },
    { type: 'number' },
    { type: 'null' },
    { $ref: '#/$defs/timeDuration' },
    { type: 'array', items: { $ref: '#/$defs/dataTableRow' } },
    { $ref: '#/$defs/uploadedFile' },
    { type: 'array', items: { type: 'string' } },
  ],
};
const schema33 = {
  type: 'object',
  properties: {
    hours: { oneOf: [{ type: 'number' }, { type: 'null' }] },
    minutes: { oneOf: [{ type: 'number' }, { type: 'null' }] },
  },
  required: ['hours', 'minutes'],
};
const schema35 = {
  type: 'object',
  properties: { fileId: { type: 'string' } },
  required: ['fileId'],
};
const schema34 = {
  type: 'object',
  properties: { id: { type: 'string' }, data: { $ref: '#' } },
  required: ['id', 'data'],
};
const root0 = { validate: validate20 };
function validate22(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  let vErrors = null;
  let errors = 0;
  const evaluated0 = validate22.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  if (errors === 0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (
        (data.id === undefined && (missing0 = 'id')) ||
        (data.data === undefined && (missing0 = 'data'))
      ) {
        validate22.errors = [
          {
            instancePath,
            schemaPath: '#/required',
            keyword: 'required',
            params: { missingProperty: missing0 },
            message: "must have required property '" + missing0 + "'",
          },
        ];
        return false;
      } else {
        if (data.id !== undefined) {
          const _errs1 = errors;
          if (typeof data.id !== 'string') {
            validate22.errors = [
              {
                instancePath: instancePath + '/id',
                schemaPath: '#/properties/id/type',
                keyword: 'type',
                params: { type: 'string' },
                message: 'must be string',
              },
            ];
            return false;
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.data !== undefined) {
            const _errs3 = errors;
            if (
              !root0.validate(data.data, {
                instancePath: instancePath + '/data',
                parentData: data,
                parentDataProperty: 'data',
                rootData,
                dynamicAnchors,
              })
            ) {
              vErrors =
                vErrors === null ? root0.validate.errors : vErrors.concat(root0.validate.errors);
              errors = vErrors.length;
            }
            var valid0 = _errs3 === errors;
          } else {
            var valid0 = true;
          }
        }
      }
    } else {
      validate22.errors = [
        {
          instancePath,
          schemaPath: '#/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        },
      ];
      return false;
    }
  }
  validate22.errors = vErrors;
  return errors === 0;
}
validate22.evaluated = {
  props: { id: true, data: true },
  dynamicProps: false,
  dynamicItems: false,
};
function validate21(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  let vErrors = null;
  let errors = 0;
  const evaluated0 = validate21.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  const _errs0 = errors;
  let valid0 = false;
  const _errs1 = errors;
  if (typeof data !== 'boolean') {
    const err0 = {
      instancePath,
      schemaPath: '#/anyOf/0/type',
      keyword: 'type',
      params: { type: 'boolean' },
      message: 'must be boolean',
    };
    if (vErrors === null) {
      vErrors = [err0];
    } else {
      vErrors.push(err0);
    }
    errors++;
  }
  var _valid0 = _errs1 === errors;
  valid0 = valid0 || _valid0;
  const _errs3 = errors;
  if (typeof data !== 'string') {
    const err1 = {
      instancePath,
      schemaPath: '#/anyOf/1/type',
      keyword: 'type',
      params: { type: 'string' },
      message: 'must be string',
    };
    if (vErrors === null) {
      vErrors = [err1];
    } else {
      vErrors.push(err1);
    }
    errors++;
  }
  var _valid0 = _errs3 === errors;
  valid0 = valid0 || _valid0;
  const _errs5 = errors;
  if (!(typeof data == 'number' && isFinite(data))) {
    const err2 = {
      instancePath,
      schemaPath: '#/anyOf/2/type',
      keyword: 'type',
      params: { type: 'number' },
      message: 'must be number',
    };
    if (vErrors === null) {
      vErrors = [err2];
    } else {
      vErrors.push(err2);
    }
    errors++;
  }
  var _valid0 = _errs5 === errors;
  valid0 = valid0 || _valid0;
  const _errs7 = errors;
  if (data !== null) {
    const err3 = {
      instancePath,
      schemaPath: '#/anyOf/3/type',
      keyword: 'type',
      params: { type: 'null' },
      message: 'must be null',
    };
    if (vErrors === null) {
      vErrors = [err3];
    } else {
      vErrors.push(err3);
    }
    errors++;
  }
  var _valid0 = _errs7 === errors;
  valid0 = valid0 || _valid0;
  const _errs9 = errors;
  const _errs10 = errors;
  if (errors === _errs10) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (
        (data.hours === undefined && (missing0 = 'hours')) ||
        (data.minutes === undefined && (missing0 = 'minutes'))
      ) {
        const err4 = {
          instancePath,
          schemaPath: '#/$defs/timeDuration/required',
          keyword: 'required',
          params: { missingProperty: missing0 },
          message: "must have required property '" + missing0 + "'",
        };
        if (vErrors === null) {
          vErrors = [err4];
        } else {
          vErrors.push(err4);
        }
        errors++;
      } else {
        if (data.hours !== undefined) {
          let data0 = data.hours;
          const _errs12 = errors;
          const _errs13 = errors;
          let valid3 = false;
          let passing0 = null;
          const _errs14 = errors;
          if (!(typeof data0 == 'number' && isFinite(data0))) {
            const err5 = {
              instancePath: instancePath + '/hours',
              schemaPath: '#/$defs/timeDuration/properties/hours/oneOf/0/type',
              keyword: 'type',
              params: { type: 'number' },
              message: 'must be number',
            };
            if (vErrors === null) {
              vErrors = [err5];
            } else {
              vErrors.push(err5);
            }
            errors++;
          }
          var _valid1 = _errs14 === errors;
          if (_valid1) {
            valid3 = true;
            passing0 = 0;
          }
          const _errs16 = errors;
          if (data0 !== null) {
            const err6 = {
              instancePath: instancePath + '/hours',
              schemaPath: '#/$defs/timeDuration/properties/hours/oneOf/1/type',
              keyword: 'type',
              params: { type: 'null' },
              message: 'must be null',
            };
            if (vErrors === null) {
              vErrors = [err6];
            } else {
              vErrors.push(err6);
            }
            errors++;
          }
          var _valid1 = _errs16 === errors;
          if (_valid1 && valid3) {
            valid3 = false;
            passing0 = [passing0, 1];
          } else {
            if (_valid1) {
              valid3 = true;
              passing0 = 1;
            }
          }
          if (!valid3) {
            const err7 = {
              instancePath: instancePath + '/hours',
              schemaPath: '#/$defs/timeDuration/properties/hours/oneOf',
              keyword: 'oneOf',
              params: { passingSchemas: passing0 },
              message: 'must match exactly one schema in oneOf',
            };
            if (vErrors === null) {
              vErrors = [err7];
            } else {
              vErrors.push(err7);
            }
            errors++;
          } else {
            errors = _errs13;
            if (vErrors !== null) {
              if (_errs13) {
                vErrors.length = _errs13;
              } else {
                vErrors = null;
              }
            }
          }
          var valid2 = _errs12 === errors;
        } else {
          var valid2 = true;
        }
        if (valid2) {
          if (data.minutes !== undefined) {
            let data1 = data.minutes;
            const _errs18 = errors;
            const _errs19 = errors;
            let valid4 = false;
            let passing1 = null;
            const _errs20 = errors;
            if (!(typeof data1 == 'number' && isFinite(data1))) {
              const err8 = {
                instancePath: instancePath + '/minutes',
                schemaPath: '#/$defs/timeDuration/properties/minutes/oneOf/0/type',
                keyword: 'type',
                params: { type: 'number' },
                message: 'must be number',
              };
              if (vErrors === null) {
                vErrors = [err8];
              } else {
                vErrors.push(err8);
              }
              errors++;
            }
            var _valid2 = _errs20 === errors;
            if (_valid2) {
              valid4 = true;
              passing1 = 0;
            }
            const _errs22 = errors;
            if (data1 !== null) {
              const err9 = {
                instancePath: instancePath + '/minutes',
                schemaPath: '#/$defs/timeDuration/properties/minutes/oneOf/1/type',
                keyword: 'type',
                params: { type: 'null' },
                message: 'must be null',
              };
              if (vErrors === null) {
                vErrors = [err9];
              } else {
                vErrors.push(err9);
              }
              errors++;
            }
            var _valid2 = _errs22 === errors;
            if (_valid2 && valid4) {
              valid4 = false;
              passing1 = [passing1, 1];
            } else {
              if (_valid2) {
                valid4 = true;
                passing1 = 1;
              }
            }
            if (!valid4) {
              const err10 = {
                instancePath: instancePath + '/minutes',
                schemaPath: '#/$defs/timeDuration/properties/minutes/oneOf',
                keyword: 'oneOf',
                params: { passingSchemas: passing1 },
                message: 'must match exactly one schema in oneOf',
              };
              if (vErrors === null) {
                vErrors = [err10];
              } else {
                vErrors.push(err10);
              }
              errors++;
            } else {
              errors = _errs19;
              if (vErrors !== null) {
                if (_errs19) {
                  vErrors.length = _errs19;
                } else {
                  vErrors = null;
                }
              }
            }
            var valid2 = _errs18 === errors;
          } else {
            var valid2 = true;
          }
        }
      }
    } else {
      const err11 = {
        instancePath,
        schemaPath: '#/$defs/timeDuration/type',
        keyword: 'type',
        params: { type: 'object' },
        message: 'must be object',
      };
      if (vErrors === null) {
        vErrors = [err11];
      } else {
        vErrors.push(err11);
      }
      errors++;
    }
  }
  var _valid0 = _errs9 === errors;
  valid0 = valid0 || _valid0;
  if (_valid0) {
    var props0 = {};
    props0.hours = true;
    props0.minutes = true;
  }
  const _errs24 = errors;
  if (errors === _errs24) {
    if (Array.isArray(data)) {
      var valid5 = true;
      const len0 = data.length;
      for (let i0 = 0; i0 < len0; i0++) {
        const _errs26 = errors;
        if (
          !validate22(data[i0], {
            instancePath: instancePath + '/' + i0,
            parentData: data,
            parentDataProperty: i0,
            rootData,
            dynamicAnchors,
          })
        ) {
          vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
          errors = vErrors.length;
        }
        var valid5 = _errs26 === errors;
        if (!valid5) {
          break;
        }
      }
    } else {
      const err12 = {
        instancePath,
        schemaPath: '#/anyOf/5/type',
        keyword: 'type',
        params: { type: 'array' },
        message: 'must be array',
      };
      if (vErrors === null) {
        vErrors = [err12];
      } else {
        vErrors.push(err12);
      }
      errors++;
    }
  }
  var _valid0 = _errs24 === errors;
  valid0 = valid0 || _valid0;
  if (_valid0) {
    var items0 = true;
  }
  const _errs27 = errors;
  const _errs28 = errors;
  if (errors === _errs28) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing1;
      if (data.fileId === undefined && (missing1 = 'fileId')) {
        const err13 = {
          instancePath,
          schemaPath: '#/$defs/uploadedFile/required',
          keyword: 'required',
          params: { missingProperty: missing1 },
          message: "must have required property '" + missing1 + "'",
        };
        if (vErrors === null) {
          vErrors = [err13];
        } else {
          vErrors.push(err13);
        }
        errors++;
      } else {
        if (data.fileId !== undefined) {
          if (typeof data.fileId !== 'string') {
            const err14 = {
              instancePath: instancePath + '/fileId',
              schemaPath: '#/$defs/uploadedFile/properties/fileId/type',
              keyword: 'type',
              params: { type: 'string' },
              message: 'must be string',
            };
            if (vErrors === null) {
              vErrors = [err14];
            } else {
              vErrors.push(err14);
            }
            errors++;
          }
        }
      }
    } else {
      const err15 = {
        instancePath,
        schemaPath: '#/$defs/uploadedFile/type',
        keyword: 'type',
        params: { type: 'object' },
        message: 'must be object',
      };
      if (vErrors === null) {
        vErrors = [err15];
      } else {
        vErrors.push(err15);
      }
      errors++;
    }
  }
  var _valid0 = _errs27 === errors;
  valid0 = valid0 || _valid0;
  if (_valid0) {
    if (props0 !== true) {
      props0 = props0 || {};
      props0.fileId = true;
    }
  }
  const _errs32 = errors;
  if (errors === _errs32) {
    if (Array.isArray(data)) {
      var valid8 = true;
      const len1 = data.length;
      for (let i1 = 0; i1 < len1; i1++) {
        const _errs34 = errors;
        if (typeof data[i1] !== 'string') {
          const err16 = {
            instancePath: instancePath + '/' + i1,
            schemaPath: '#/anyOf/7/items/type',
            keyword: 'type',
            params: { type: 'string' },
            message: 'must be string',
          };
          if (vErrors === null) {
            vErrors = [err16];
          } else {
            vErrors.push(err16);
          }
          errors++;
        }
        var valid8 = _errs34 === errors;
        if (!valid8) {
          break;
        }
      }
    } else {
      const err17 = {
        instancePath,
        schemaPath: '#/anyOf/7/type',
        keyword: 'type',
        params: { type: 'array' },
        message: 'must be array',
      };
      if (vErrors === null) {
        vErrors = [err17];
      } else {
        vErrors.push(err17);
      }
      errors++;
    }
  }
  var _valid0 = _errs32 === errors;
  valid0 = valid0 || _valid0;
  if (_valid0) {
    if (items0 !== true) {
      items0 = true;
    }
  }
  if (!valid0) {
    const err18 = {
      instancePath,
      schemaPath: '#/anyOf',
      keyword: 'anyOf',
      params: {},
      message: 'must match a schema in anyOf',
    };
    if (vErrors === null) {
      vErrors = [err18];
    } else {
      vErrors.push(err18);
    }
    errors++;
    validate21.errors = vErrors;
    return false;
  } else {
    errors = _errs0;
    if (vErrors !== null) {
      if (_errs0) {
        vErrors.length = _errs0;
      } else {
        vErrors = null;
      }
    }
  }
  validate21.errors = vErrors;
  evaluated0.props = props0;
  evaluated0.items = items0;
  return errors === 0;
}
validate21.evaluated = { dynamicProps: true, dynamicItems: true };
function validate20(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/context-data/context-data.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate20.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  if (errors === 0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      for (const key0 in data) {
        const _errs2 = errors;
        if (
          !validate21(data[key0], {
            instancePath: instancePath + '/' + key0.replace(/~/g, '~0').replace(/\//g, '~1'),
            parentData: data,
            parentDataProperty: key0,
            rootData,
            dynamicAnchors,
          })
        ) {
          vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
          errors = vErrors.length;
        }
        var valid0 = _errs2 === errors;
        if (!valid0) {
          break;
        }
      }
    } else {
      validate20.errors = [
        {
          instancePath,
          schemaPath: '#/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        },
      ];
      return false;
    }
  }
  validate20.errors = vErrors;
  return errors === 0;
}
validate20.evaluated = { props: true, dynamicProps: false, dynamicItems: false };
export const validateRichText = validate25;
const schema36 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/custom-field/rich-text.json',
  title: 'RichText',
  oneOf: [
    {
      title: 'Delta',
      type: 'object',
      properties: {
        delta: {
          type: 'object',
          properties: {
            ops: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  insert: { oneOf: [{ type: 'string' }, { type: 'object' }] },
                  attributes: { type: 'object' },
                },
                required: ['insert'],
              },
            },
          },
          required: ['ops'],
        },
      },
      required: ['delta'],
    },
  ],
};
function validate25(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/custom-field/rich-text.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate25.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  const _errs0 = errors;
  let valid0 = false;
  let passing0 = null;
  const _errs1 = errors;
  if (errors === _errs1) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (data.delta === undefined && (missing0 = 'delta')) {
        const err0 = {
          instancePath,
          schemaPath: '#/oneOf/0/required',
          keyword: 'required',
          params: { missingProperty: missing0 },
          message: "must have required property '" + missing0 + "'",
        };
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      } else {
        if (data.delta !== undefined) {
          let data0 = data.delta;
          const _errs3 = errors;
          if (errors === _errs3) {
            if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
              let missing1;
              if (data0.ops === undefined && (missing1 = 'ops')) {
                const err1 = {
                  instancePath: instancePath + '/delta',
                  schemaPath: '#/oneOf/0/properties/delta/required',
                  keyword: 'required',
                  params: { missingProperty: missing1 },
                  message: "must have required property '" + missing1 + "'",
                };
                if (vErrors === null) {
                  vErrors = [err1];
                } else {
                  vErrors.push(err1);
                }
                errors++;
              } else {
                if (data0.ops !== undefined) {
                  let data1 = data0.ops;
                  const _errs5 = errors;
                  if (errors === _errs5) {
                    if (Array.isArray(data1)) {
                      var valid3 = true;
                      const len0 = data1.length;
                      for (let i0 = 0; i0 < len0; i0++) {
                        let data2 = data1[i0];
                        const _errs7 = errors;
                        if (errors === _errs7) {
                          if (data2 && typeof data2 == 'object' && !Array.isArray(data2)) {
                            let missing2;
                            if (data2.insert === undefined && (missing2 = 'insert')) {
                              const err2 = {
                                instancePath: instancePath + '/delta/ops/' + i0,
                                schemaPath:
                                  '#/oneOf/0/properties/delta/properties/ops/items/required',
                                keyword: 'required',
                                params: { missingProperty: missing2 },
                                message: "must have required property '" + missing2 + "'",
                              };
                              if (vErrors === null) {
                                vErrors = [err2];
                              } else {
                                vErrors.push(err2);
                              }
                              errors++;
                            } else {
                              if (data2.insert !== undefined) {
                                let data3 = data2.insert;
                                const _errs9 = errors;
                                const _errs10 = errors;
                                let valid5 = false;
                                let passing1 = null;
                                const _errs11 = errors;
                                if (typeof data3 !== 'string') {
                                  const err3 = {
                                    instancePath: instancePath + '/delta/ops/' + i0 + '/insert',
                                    schemaPath:
                                      '#/oneOf/0/properties/delta/properties/ops/items/properties/insert/oneOf/0/type',
                                    keyword: 'type',
                                    params: { type: 'string' },
                                    message: 'must be string',
                                  };
                                  if (vErrors === null) {
                                    vErrors = [err3];
                                  } else {
                                    vErrors.push(err3);
                                  }
                                  errors++;
                                }
                                var _valid1 = _errs11 === errors;
                                if (_valid1) {
                                  valid5 = true;
                                  passing1 = 0;
                                }
                                const _errs13 = errors;
                                if (!(data3 && typeof data3 == 'object' && !Array.isArray(data3))) {
                                  const err4 = {
                                    instancePath: instancePath + '/delta/ops/' + i0 + '/insert',
                                    schemaPath:
                                      '#/oneOf/0/properties/delta/properties/ops/items/properties/insert/oneOf/1/type',
                                    keyword: 'type',
                                    params: { type: 'object' },
                                    message: 'must be object',
                                  };
                                  if (vErrors === null) {
                                    vErrors = [err4];
                                  } else {
                                    vErrors.push(err4);
                                  }
                                  errors++;
                                }
                                var _valid1 = _errs13 === errors;
                                if (_valid1 && valid5) {
                                  valid5 = false;
                                  passing1 = [passing1, 1];
                                } else {
                                  if (_valid1) {
                                    valid5 = true;
                                    passing1 = 1;
                                  }
                                }
                                if (!valid5) {
                                  const err5 = {
                                    instancePath: instancePath + '/delta/ops/' + i0 + '/insert',
                                    schemaPath:
                                      '#/oneOf/0/properties/delta/properties/ops/items/properties/insert/oneOf',
                                    keyword: 'oneOf',
                                    params: { passingSchemas: passing1 },
                                    message: 'must match exactly one schema in oneOf',
                                  };
                                  if (vErrors === null) {
                                    vErrors = [err5];
                                  } else {
                                    vErrors.push(err5);
                                  }
                                  errors++;
                                } else {
                                  errors = _errs10;
                                  if (vErrors !== null) {
                                    if (_errs10) {
                                      vErrors.length = _errs10;
                                    } else {
                                      vErrors = null;
                                    }
                                  }
                                }
                                var valid4 = _errs9 === errors;
                              } else {
                                var valid4 = true;
                              }
                              if (valid4) {
                                if (data2.attributes !== undefined) {
                                  let data4 = data2.attributes;
                                  const _errs15 = errors;
                                  if (
                                    !(data4 && typeof data4 == 'object' && !Array.isArray(data4))
                                  ) {
                                    const err6 = {
                                      instancePath:
                                        instancePath + '/delta/ops/' + i0 + '/attributes',
                                      schemaPath:
                                        '#/oneOf/0/properties/delta/properties/ops/items/properties/attributes/type',
                                      keyword: 'type',
                                      params: { type: 'object' },
                                      message: 'must be object',
                                    };
                                    if (vErrors === null) {
                                      vErrors = [err6];
                                    } else {
                                      vErrors.push(err6);
                                    }
                                    errors++;
                                  }
                                  var valid4 = _errs15 === errors;
                                } else {
                                  var valid4 = true;
                                }
                              }
                            }
                          } else {
                            const err7 = {
                              instancePath: instancePath + '/delta/ops/' + i0,
                              schemaPath: '#/oneOf/0/properties/delta/properties/ops/items/type',
                              keyword: 'type',
                              params: { type: 'object' },
                              message: 'must be object',
                            };
                            if (vErrors === null) {
                              vErrors = [err7];
                            } else {
                              vErrors.push(err7);
                            }
                            errors++;
                          }
                        }
                        var valid3 = _errs7 === errors;
                        if (!valid3) {
                          break;
                        }
                      }
                    } else {
                      const err8 = {
                        instancePath: instancePath + '/delta/ops',
                        schemaPath: '#/oneOf/0/properties/delta/properties/ops/type',
                        keyword: 'type',
                        params: { type: 'array' },
                        message: 'must be array',
                      };
                      if (vErrors === null) {
                        vErrors = [err8];
                      } else {
                        vErrors.push(err8);
                      }
                      errors++;
                    }
                  }
                }
              }
            } else {
              const err9 = {
                instancePath: instancePath + '/delta',
                schemaPath: '#/oneOf/0/properties/delta/type',
                keyword: 'type',
                params: { type: 'object' },
                message: 'must be object',
              };
              if (vErrors === null) {
                vErrors = [err9];
              } else {
                vErrors.push(err9);
              }
              errors++;
            }
          }
        }
      }
    } else {
      const err10 = {
        instancePath,
        schemaPath: '#/oneOf/0/type',
        keyword: 'type',
        params: { type: 'object' },
        message: 'must be object',
      };
      if (vErrors === null) {
        vErrors = [err10];
      } else {
        vErrors.push(err10);
      }
      errors++;
    }
  }
  var _valid0 = _errs1 === errors;
  if (_valid0) {
    valid0 = true;
    passing0 = 0;
    var props0 = {};
    props0.delta = true;
  }
  if (!valid0) {
    const err11 = {
      instancePath,
      schemaPath: '#/oneOf',
      keyword: 'oneOf',
      params: { passingSchemas: passing0 },
      message: 'must match exactly one schema in oneOf',
    };
    if (vErrors === null) {
      vErrors = [err11];
    } else {
      vErrors.push(err11);
    }
    errors++;
    validate25.errors = vErrors;
    return false;
  } else {
    errors = _errs0;
    if (vErrors !== null) {
      if (_errs0) {
        vErrors.length = _errs0;
      } else {
        vErrors = null;
      }
    }
  }
  validate25.errors = vErrors;
  evaluated0.props = props0;
  return errors === 0;
}
validate25.evaluated = { dynamicProps: true, dynamicItems: false };
export const validateAuthorizeCreateSiteInput = validate26;
const schema37 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/authorize-create-site/input.json',
  title: 'AuthorizeCreateSiteInput',
  type: 'object',
  properties: { value: { $ref: './value.json' }, context: { $ref: './context.json' } },
  required: ['value', 'context'],
};
const schema38 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/authorize-create-site/value.json',
  title: 'AuthorizeCreateSiteValue',
  $ref: '../../authorize-hook-result/authorize-hook-result.json',
};
const schema39 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/authorize-hook-result/authorize-hook-result.json',
  title: 'AuthorizeHookResult',
  description:
    'An object indicating whether a user is authorized to perform a specific action. The initial value is determined by the user’s permissions on the platform on which the action is being made.',
  oneOf: [
    { type: 'object', properties: { ok: { const: true } }, required: ['ok'] },
    {
      type: 'object',
      properties: { ok: { const: false }, message: { type: 'string' } },
      required: ['ok', 'message'],
    },
  ],
};
function validate27(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/authorize-create-site/value.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate27.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  const _errs1 = errors;
  let valid1 = false;
  let passing0 = null;
  const _errs2 = errors;
  if (errors === _errs2) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (data.ok === undefined && (missing0 = 'ok')) {
        const err0 = {
          instancePath,
          schemaPath: '../../authorize-hook-result/authorize-hook-result.json/oneOf/0/required',
          keyword: 'required',
          params: { missingProperty: missing0 },
          message: "must have required property '" + missing0 + "'",
        };
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      } else {
        if (data.ok !== undefined) {
          if (true !== data.ok) {
            const err1 = {
              instancePath: instancePath + '/ok',
              schemaPath:
                '../../authorize-hook-result/authorize-hook-result.json/oneOf/0/properties/ok/const',
              keyword: 'const',
              params: { allowedValue: true },
              message: 'must be equal to constant',
            };
            if (vErrors === null) {
              vErrors = [err1];
            } else {
              vErrors.push(err1);
            }
            errors++;
          }
        }
      }
    } else {
      const err2 = {
        instancePath,
        schemaPath: '../../authorize-hook-result/authorize-hook-result.json/oneOf/0/type',
        keyword: 'type',
        params: { type: 'object' },
        message: 'must be object',
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
  }
  var _valid0 = _errs2 === errors;
  if (_valid0) {
    valid1 = true;
    passing0 = 0;
    var props0 = {};
    props0.ok = true;
  }
  const _errs5 = errors;
  if (errors === _errs5) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing1;
      if (
        (data.ok === undefined && (missing1 = 'ok')) ||
        (data.message === undefined && (missing1 = 'message'))
      ) {
        const err3 = {
          instancePath,
          schemaPath: '../../authorize-hook-result/authorize-hook-result.json/oneOf/1/required',
          keyword: 'required',
          params: { missingProperty: missing1 },
          message: "must have required property '" + missing1 + "'",
        };
        if (vErrors === null) {
          vErrors = [err3];
        } else {
          vErrors.push(err3);
        }
        errors++;
      } else {
        if (data.ok !== undefined) {
          const _errs7 = errors;
          if (false !== data.ok) {
            const err4 = {
              instancePath: instancePath + '/ok',
              schemaPath:
                '../../authorize-hook-result/authorize-hook-result.json/oneOf/1/properties/ok/const',
              keyword: 'const',
              params: { allowedValue: false },
              message: 'must be equal to constant',
            };
            if (vErrors === null) {
              vErrors = [err4];
            } else {
              vErrors.push(err4);
            }
            errors++;
          }
          var valid3 = _errs7 === errors;
        } else {
          var valid3 = true;
        }
        if (valid3) {
          if (data.message !== undefined) {
            const _errs8 = errors;
            if (typeof data.message !== 'string') {
              const err5 = {
                instancePath: instancePath + '/message',
                schemaPath:
                  '../../authorize-hook-result/authorize-hook-result.json/oneOf/1/properties/message/type',
                keyword: 'type',
                params: { type: 'string' },
                message: 'must be string',
              };
              if (vErrors === null) {
                vErrors = [err5];
              } else {
                vErrors.push(err5);
              }
              errors++;
            }
            var valid3 = _errs8 === errors;
          } else {
            var valid3 = true;
          }
        }
      }
    } else {
      const err6 = {
        instancePath,
        schemaPath: '../../authorize-hook-result/authorize-hook-result.json/oneOf/1/type',
        keyword: 'type',
        params: { type: 'object' },
        message: 'must be object',
      };
      if (vErrors === null) {
        vErrors = [err6];
      } else {
        vErrors.push(err6);
      }
      errors++;
    }
  }
  var _valid0 = _errs5 === errors;
  if (_valid0 && valid1) {
    valid1 = false;
    passing0 = [passing0, 1];
  } else {
    if (_valid0) {
      valid1 = true;
      passing0 = 1;
      if (props0 !== true) {
        props0 = props0 || {};
        props0.ok = true;
        props0.message = true;
      }
    }
  }
  if (!valid1) {
    const err7 = {
      instancePath,
      schemaPath: '../../authorize-hook-result/authorize-hook-result.json/oneOf',
      keyword: 'oneOf',
      params: { passingSchemas: passing0 },
      message: 'must match exactly one schema in oneOf',
    };
    if (vErrors === null) {
      vErrors = [err7];
    } else {
      vErrors.push(err7);
    }
    errors++;
    validate27.errors = vErrors;
    return false;
  } else {
    errors = _errs1;
    if (vErrors !== null) {
      if (_errs1) {
        vErrors.length = _errs1;
      } else {
        vErrors = null;
      }
    }
  }
  validate27.errors = vErrors;
  evaluated0.props = props0;
  return errors === 0;
}
validate27.evaluated = { dynamicProps: true, dynamicItems: false };
const schema40 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/authorize-create-site/context.json',
  title: 'AuthorizeCreateSiteContext',
  description: 'The context of the request. Either adminUser or user will be set.',
  $ref: '../../request-context/base-request-context.json',
};
const schema41 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/request-context/base-request-context.json',
  title: 'BaseRequestContext',
  type: 'object',
  properties: {
    adminUser: {
      description:
        'The admin user making the request. Extensions do not see this user in the Users table.',
      type: 'object',
      properties: { id: { type: 'string' }, email: { type: 'string' } },
      required: ['id', 'email'],
    },
    user: {
      description:
        'The user making the request. This user belongs to the platform on which the request is being made.',
      type: 'object',
      properties: { id: { type: 'string' } },
      required: ['id'],
    },
    site: {
      description:
        'The site from which the request originated. This field will be set only if the site belongs to the platform (is not the admin site).',
      type: 'object',
      properties: { id: { type: 'string' } },
      required: ['id'],
    },
  },
};
function validate29(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/authorize-create-site/context.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate29.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  const _errs0 = errors;
  if (errors === _errs0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      if (data.adminUser !== undefined) {
        let data0 = data.adminUser;
        const _errs2 = errors;
        if (errors === _errs2) {
          if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
            let missing0;
            if (
              (data0.id === undefined && (missing0 = 'id')) ||
              (data0.email === undefined && (missing0 = 'email'))
            ) {
              validate29.errors = [
                {
                  instancePath: instancePath + '/adminUser',
                  schemaPath:
                    '../../request-context/base-request-context.json/properties/adminUser/required',
                  keyword: 'required',
                  params: { missingProperty: missing0 },
                  message: "must have required property '" + missing0 + "'",
                },
              ];
              return false;
            } else {
              if (data0.id !== undefined) {
                const _errs4 = errors;
                if (typeof data0.id !== 'string') {
                  validate29.errors = [
                    {
                      instancePath: instancePath + '/adminUser/id',
                      schemaPath:
                        '../../request-context/base-request-context.json/properties/adminUser/properties/id/type',
                      keyword: 'type',
                      params: { type: 'string' },
                      message: 'must be string',
                    },
                  ];
                  return false;
                }
                var valid2 = _errs4 === errors;
              } else {
                var valid2 = true;
              }
              if (valid2) {
                if (data0.email !== undefined) {
                  const _errs6 = errors;
                  if (typeof data0.email !== 'string') {
                    validate29.errors = [
                      {
                        instancePath: instancePath + '/adminUser/email',
                        schemaPath:
                          '../../request-context/base-request-context.json/properties/adminUser/properties/email/type',
                        keyword: 'type',
                        params: { type: 'string' },
                        message: 'must be string',
                      },
                    ];
                    return false;
                  }
                  var valid2 = _errs6 === errors;
                } else {
                  var valid2 = true;
                }
              }
            }
          } else {
            validate29.errors = [
              {
                instancePath: instancePath + '/adminUser',
                schemaPath:
                  '../../request-context/base-request-context.json/properties/adminUser/type',
                keyword: 'type',
                params: { type: 'object' },
                message: 'must be object',
              },
            ];
            return false;
          }
        }
        var valid1 = _errs2 === errors;
      } else {
        var valid1 = true;
      }
      if (valid1) {
        if (data.user !== undefined) {
          let data3 = data.user;
          const _errs8 = errors;
          if (errors === _errs8) {
            if (data3 && typeof data3 == 'object' && !Array.isArray(data3)) {
              let missing1;
              if (data3.id === undefined && (missing1 = 'id')) {
                validate29.errors = [
                  {
                    instancePath: instancePath + '/user',
                    schemaPath:
                      '../../request-context/base-request-context.json/properties/user/required',
                    keyword: 'required',
                    params: { missingProperty: missing1 },
                    message: "must have required property '" + missing1 + "'",
                  },
                ];
                return false;
              } else {
                if (data3.id !== undefined) {
                  if (typeof data3.id !== 'string') {
                    validate29.errors = [
                      {
                        instancePath: instancePath + '/user/id',
                        schemaPath:
                          '../../request-context/base-request-context.json/properties/user/properties/id/type',
                        keyword: 'type',
                        params: { type: 'string' },
                        message: 'must be string',
                      },
                    ];
                    return false;
                  }
                }
              }
            } else {
              validate29.errors = [
                {
                  instancePath: instancePath + '/user',
                  schemaPath:
                    '../../request-context/base-request-context.json/properties/user/type',
                  keyword: 'type',
                  params: { type: 'object' },
                  message: 'must be object',
                },
              ];
              return false;
            }
          }
          var valid1 = _errs8 === errors;
        } else {
          var valid1 = true;
        }
        if (valid1) {
          if (data.site !== undefined) {
            let data5 = data.site;
            const _errs12 = errors;
            if (errors === _errs12) {
              if (data5 && typeof data5 == 'object' && !Array.isArray(data5)) {
                let missing2;
                if (data5.id === undefined && (missing2 = 'id')) {
                  validate29.errors = [
                    {
                      instancePath: instancePath + '/site',
                      schemaPath:
                        '../../request-context/base-request-context.json/properties/site/required',
                      keyword: 'required',
                      params: { missingProperty: missing2 },
                      message: "must have required property '" + missing2 + "'",
                    },
                  ];
                  return false;
                } else {
                  if (data5.id !== undefined) {
                    if (typeof data5.id !== 'string') {
                      validate29.errors = [
                        {
                          instancePath: instancePath + '/site/id',
                          schemaPath:
                            '../../request-context/base-request-context.json/properties/site/properties/id/type',
                          keyword: 'type',
                          params: { type: 'string' },
                          message: 'must be string',
                        },
                      ];
                      return false;
                    }
                  }
                }
              } else {
                validate29.errors = [
                  {
                    instancePath: instancePath + '/site',
                    schemaPath:
                      '../../request-context/base-request-context.json/properties/site/type',
                    keyword: 'type',
                    params: { type: 'object' },
                    message: 'must be object',
                  },
                ];
                return false;
              }
            }
            var valid1 = _errs12 === errors;
          } else {
            var valid1 = true;
          }
        }
      }
    } else {
      validate29.errors = [
        {
          instancePath,
          schemaPath: '../../request-context/base-request-context.json/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        },
      ];
      return false;
    }
  }
  validate29.errors = vErrors;
  return errors === 0;
}
validate29.evaluated = {
  props: { adminUser: true, user: true, site: true },
  dynamicProps: false,
  dynamicItems: false,
};
function validate26(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/authorize-create-site/input.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate26.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  if (errors === 0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (
        (data.value === undefined && (missing0 = 'value')) ||
        (data.context === undefined && (missing0 = 'context'))
      ) {
        validate26.errors = [
          {
            instancePath,
            schemaPath: '#/required',
            keyword: 'required',
            params: { missingProperty: missing0 },
            message: "must have required property '" + missing0 + "'",
          },
        ];
        return false;
      } else {
        if (data.value !== undefined) {
          const _errs1 = errors;
          if (
            !validate27(data.value, {
              instancePath: instancePath + '/value',
              parentData: data,
              parentDataProperty: 'value',
              rootData,
              dynamicAnchors,
            })
          ) {
            vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
            errors = vErrors.length;
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.context !== undefined) {
            const _errs2 = errors;
            if (
              !validate29(data.context, {
                instancePath: instancePath + '/context',
                parentData: data,
                parentDataProperty: 'context',
                rootData,
                dynamicAnchors,
              })
            ) {
              vErrors = vErrors === null ? validate29.errors : vErrors.concat(validate29.errors);
              errors = vErrors.length;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
        }
      }
    } else {
      validate26.errors = [
        {
          instancePath,
          schemaPath: '#/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        },
      ];
      return false;
    }
  }
  validate26.errors = vErrors;
  return errors === 0;
}
validate26.evaluated = {
  props: { value: true, context: true },
  dynamicProps: false,
  dynamicItems: false,
};
export const validateAuthorizeCreateSiteResult = validate31;
const schema42 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/authorize-create-site/result.json',
  title: 'AuthorizeCreateSiteResult',
  type: 'object',
  properties: {
    value: { $ref: './value.json' },
    stop: {
      description:
        'If true, this is the last handler that will be called for the hook, and the result value will be used as the final result.',
      type: ['boolean', 'null'],
    },
  },
  required: ['value'],
};
function validate31(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/authorize-create-site/result.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate31.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  if (errors === 0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (data.value === undefined && (missing0 = 'value')) {
        validate31.errors = [
          {
            instancePath,
            schemaPath: '#/required',
            keyword: 'required',
            params: { missingProperty: missing0 },
            message: "must have required property '" + missing0 + "'",
          },
        ];
        return false;
      } else {
        if (data.value !== undefined) {
          const _errs1 = errors;
          if (
            !validate27(data.value, {
              instancePath: instancePath + '/value',
              parentData: data,
              parentDataProperty: 'value',
              rootData,
              dynamicAnchors,
            })
          ) {
            vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
            errors = vErrors.length;
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.stop !== undefined) {
            let data1 = data.stop;
            const _errs2 = errors;
            if (typeof data1 !== 'boolean' && data1 !== null) {
              validate31.errors = [
                {
                  instancePath: instancePath + '/stop',
                  schemaPath: '#/properties/stop/type',
                  keyword: 'type',
                  params: { type: schema42.properties.stop.type },
                  message: 'must be boolean,null',
                },
              ];
              return false;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
        }
      }
    } else {
      validate31.errors = [
        {
          instancePath,
          schemaPath: '#/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        },
      ];
      return false;
    }
  }
  validate31.errors = vErrors;
  return errors === 0;
}
validate31.evaluated = {
  props: { value: true, stop: true },
  dynamicProps: false,
  dynamicItems: false,
};
export const validateAuthorizeEditSiteInput = validate33;
const schema43 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/authorize-edit-site/input.json',
  title: 'AuthorizeEditSiteInput',
  type: 'object',
  properties: { value: { $ref: './value.json' }, context: { $ref: './context.json' } },
  required: ['value', 'context'],
};
const schema44 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/authorize-edit-site/value.json',
  title: 'AuthorizeEditSiteValue',
  $ref: '../../authorize-hook-result/authorize-hook-result.json',
};
function validate34(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/authorize-edit-site/value.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate34.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  const _errs1 = errors;
  let valid1 = false;
  let passing0 = null;
  const _errs2 = errors;
  if (errors === _errs2) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (data.ok === undefined && (missing0 = 'ok')) {
        const err0 = {
          instancePath,
          schemaPath: '../../authorize-hook-result/authorize-hook-result.json/oneOf/0/required',
          keyword: 'required',
          params: { missingProperty: missing0 },
          message: "must have required property '" + missing0 + "'",
        };
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      } else {
        if (data.ok !== undefined) {
          if (true !== data.ok) {
            const err1 = {
              instancePath: instancePath + '/ok',
              schemaPath:
                '../../authorize-hook-result/authorize-hook-result.json/oneOf/0/properties/ok/const',
              keyword: 'const',
              params: { allowedValue: true },
              message: 'must be equal to constant',
            };
            if (vErrors === null) {
              vErrors = [err1];
            } else {
              vErrors.push(err1);
            }
            errors++;
          }
        }
      }
    } else {
      const err2 = {
        instancePath,
        schemaPath: '../../authorize-hook-result/authorize-hook-result.json/oneOf/0/type',
        keyword: 'type',
        params: { type: 'object' },
        message: 'must be object',
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
  }
  var _valid0 = _errs2 === errors;
  if (_valid0) {
    valid1 = true;
    passing0 = 0;
    var props0 = {};
    props0.ok = true;
  }
  const _errs5 = errors;
  if (errors === _errs5) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing1;
      if (
        (data.ok === undefined && (missing1 = 'ok')) ||
        (data.message === undefined && (missing1 = 'message'))
      ) {
        const err3 = {
          instancePath,
          schemaPath: '../../authorize-hook-result/authorize-hook-result.json/oneOf/1/required',
          keyword: 'required',
          params: { missingProperty: missing1 },
          message: "must have required property '" + missing1 + "'",
        };
        if (vErrors === null) {
          vErrors = [err3];
        } else {
          vErrors.push(err3);
        }
        errors++;
      } else {
        if (data.ok !== undefined) {
          const _errs7 = errors;
          if (false !== data.ok) {
            const err4 = {
              instancePath: instancePath + '/ok',
              schemaPath:
                '../../authorize-hook-result/authorize-hook-result.json/oneOf/1/properties/ok/const',
              keyword: 'const',
              params: { allowedValue: false },
              message: 'must be equal to constant',
            };
            if (vErrors === null) {
              vErrors = [err4];
            } else {
              vErrors.push(err4);
            }
            errors++;
          }
          var valid3 = _errs7 === errors;
        } else {
          var valid3 = true;
        }
        if (valid3) {
          if (data.message !== undefined) {
            const _errs8 = errors;
            if (typeof data.message !== 'string') {
              const err5 = {
                instancePath: instancePath + '/message',
                schemaPath:
                  '../../authorize-hook-result/authorize-hook-result.json/oneOf/1/properties/message/type',
                keyword: 'type',
                params: { type: 'string' },
                message: 'must be string',
              };
              if (vErrors === null) {
                vErrors = [err5];
              } else {
                vErrors.push(err5);
              }
              errors++;
            }
            var valid3 = _errs8 === errors;
          } else {
            var valid3 = true;
          }
        }
      }
    } else {
      const err6 = {
        instancePath,
        schemaPath: '../../authorize-hook-result/authorize-hook-result.json/oneOf/1/type',
        keyword: 'type',
        params: { type: 'object' },
        message: 'must be object',
      };
      if (vErrors === null) {
        vErrors = [err6];
      } else {
        vErrors.push(err6);
      }
      errors++;
    }
  }
  var _valid0 = _errs5 === errors;
  if (_valid0 && valid1) {
    valid1 = false;
    passing0 = [passing0, 1];
  } else {
    if (_valid0) {
      valid1 = true;
      passing0 = 1;
      if (props0 !== true) {
        props0 = props0 || {};
        props0.ok = true;
        props0.message = true;
      }
    }
  }
  if (!valid1) {
    const err7 = {
      instancePath,
      schemaPath: '../../authorize-hook-result/authorize-hook-result.json/oneOf',
      keyword: 'oneOf',
      params: { passingSchemas: passing0 },
      message: 'must match exactly one schema in oneOf',
    };
    if (vErrors === null) {
      vErrors = [err7];
    } else {
      vErrors.push(err7);
    }
    errors++;
    validate34.errors = vErrors;
    return false;
  } else {
    errors = _errs1;
    if (vErrors !== null) {
      if (_errs1) {
        vErrors.length = _errs1;
      } else {
        vErrors = null;
      }
    }
  }
  validate34.errors = vErrors;
  evaluated0.props = props0;
  return errors === 0;
}
validate34.evaluated = { dynamicProps: true, dynamicItems: false };
const schema46 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/authorize-edit-site/context.json',
  title: 'AuthorizeEditSiteContext',
  description: 'The context of the request. Either adminUser or user will be set.',
  allOf: [
    { $ref: '../../request-context/base-request-context.json' },
    {
      type: 'object',
      properties: {
        input: {
          type: 'object',
          properties: { id: { description: 'The ID of the site being edited.', type: 'string' } },
          required: ['id'],
        },
      },
      required: ['input'],
    },
  ],
};
function validate36(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/authorize-edit-site/context.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate36.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  const _errs0 = errors;
  const _errs1 = errors;
  if (errors === _errs1) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      if (data.adminUser !== undefined) {
        let data0 = data.adminUser;
        const _errs3 = errors;
        if (errors === _errs3) {
          if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
            let missing0;
            if (
              (data0.id === undefined && (missing0 = 'id')) ||
              (data0.email === undefined && (missing0 = 'email'))
            ) {
              validate36.errors = [
                {
                  instancePath: instancePath + '/adminUser',
                  schemaPath:
                    '../../request-context/base-request-context.json/properties/adminUser/required',
                  keyword: 'required',
                  params: { missingProperty: missing0 },
                  message: "must have required property '" + missing0 + "'",
                },
              ];
              return false;
            } else {
              if (data0.id !== undefined) {
                const _errs5 = errors;
                if (typeof data0.id !== 'string') {
                  validate36.errors = [
                    {
                      instancePath: instancePath + '/adminUser/id',
                      schemaPath:
                        '../../request-context/base-request-context.json/properties/adminUser/properties/id/type',
                      keyword: 'type',
                      params: { type: 'string' },
                      message: 'must be string',
                    },
                  ];
                  return false;
                }
                var valid3 = _errs5 === errors;
              } else {
                var valid3 = true;
              }
              if (valid3) {
                if (data0.email !== undefined) {
                  const _errs7 = errors;
                  if (typeof data0.email !== 'string') {
                    validate36.errors = [
                      {
                        instancePath: instancePath + '/adminUser/email',
                        schemaPath:
                          '../../request-context/base-request-context.json/properties/adminUser/properties/email/type',
                        keyword: 'type',
                        params: { type: 'string' },
                        message: 'must be string',
                      },
                    ];
                    return false;
                  }
                  var valid3 = _errs7 === errors;
                } else {
                  var valid3 = true;
                }
              }
            }
          } else {
            validate36.errors = [
              {
                instancePath: instancePath + '/adminUser',
                schemaPath:
                  '../../request-context/base-request-context.json/properties/adminUser/type',
                keyword: 'type',
                params: { type: 'object' },
                message: 'must be object',
              },
            ];
            return false;
          }
        }
        var valid2 = _errs3 === errors;
      } else {
        var valid2 = true;
      }
      if (valid2) {
        if (data.user !== undefined) {
          let data3 = data.user;
          const _errs9 = errors;
          if (errors === _errs9) {
            if (data3 && typeof data3 == 'object' && !Array.isArray(data3)) {
              let missing1;
              if (data3.id === undefined && (missing1 = 'id')) {
                validate36.errors = [
                  {
                    instancePath: instancePath + '/user',
                    schemaPath:
                      '../../request-context/base-request-context.json/properties/user/required',
                    keyword: 'required',
                    params: { missingProperty: missing1 },
                    message: "must have required property '" + missing1 + "'",
                  },
                ];
                return false;
              } else {
                if (data3.id !== undefined) {
                  if (typeof data3.id !== 'string') {
                    validate36.errors = [
                      {
                        instancePath: instancePath + '/user/id',
                        schemaPath:
                          '../../request-context/base-request-context.json/properties/user/properties/id/type',
                        keyword: 'type',
                        params: { type: 'string' },
                        message: 'must be string',
                      },
                    ];
                    return false;
                  }
                }
              }
            } else {
              validate36.errors = [
                {
                  instancePath: instancePath + '/user',
                  schemaPath:
                    '../../request-context/base-request-context.json/properties/user/type',
                  keyword: 'type',
                  params: { type: 'object' },
                  message: 'must be object',
                },
              ];
              return false;
            }
          }
          var valid2 = _errs9 === errors;
        } else {
          var valid2 = true;
        }
        if (valid2) {
          if (data.site !== undefined) {
            let data5 = data.site;
            const _errs13 = errors;
            if (errors === _errs13) {
              if (data5 && typeof data5 == 'object' && !Array.isArray(data5)) {
                let missing2;
                if (data5.id === undefined && (missing2 = 'id')) {
                  validate36.errors = [
                    {
                      instancePath: instancePath + '/site',
                      schemaPath:
                        '../../request-context/base-request-context.json/properties/site/required',
                      keyword: 'required',
                      params: { missingProperty: missing2 },
                      message: "must have required property '" + missing2 + "'",
                    },
                  ];
                  return false;
                } else {
                  if (data5.id !== undefined) {
                    if (typeof data5.id !== 'string') {
                      validate36.errors = [
                        {
                          instancePath: instancePath + '/site/id',
                          schemaPath:
                            '../../request-context/base-request-context.json/properties/site/properties/id/type',
                          keyword: 'type',
                          params: { type: 'string' },
                          message: 'must be string',
                        },
                      ];
                      return false;
                    }
                  }
                }
              } else {
                validate36.errors = [
                  {
                    instancePath: instancePath + '/site',
                    schemaPath:
                      '../../request-context/base-request-context.json/properties/site/type',
                    keyword: 'type',
                    params: { type: 'object' },
                    message: 'must be object',
                  },
                ];
                return false;
              }
            }
            var valid2 = _errs13 === errors;
          } else {
            var valid2 = true;
          }
        }
      }
    } else {
      validate36.errors = [
        {
          instancePath,
          schemaPath: '../../request-context/base-request-context.json/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        },
      ];
      return false;
    }
  }
  var valid0 = _errs0 === errors;
  if (valid0) {
    const _errs17 = errors;
    if (errors === _errs17) {
      if (data && typeof data == 'object' && !Array.isArray(data)) {
        let missing3;
        if (data.input === undefined && (missing3 = 'input')) {
          validate36.errors = [
            {
              instancePath,
              schemaPath: '#/allOf/1/required',
              keyword: 'required',
              params: { missingProperty: missing3 },
              message: "must have required property '" + missing3 + "'",
            },
          ];
          return false;
        } else {
          if (data.input !== undefined) {
            let data7 = data.input;
            const _errs19 = errors;
            if (errors === _errs19) {
              if (data7 && typeof data7 == 'object' && !Array.isArray(data7)) {
                let missing4;
                if (data7.id === undefined && (missing4 = 'id')) {
                  validate36.errors = [
                    {
                      instancePath: instancePath + '/input',
                      schemaPath: '#/allOf/1/properties/input/required',
                      keyword: 'required',
                      params: { missingProperty: missing4 },
                      message: "must have required property '" + missing4 + "'",
                    },
                  ];
                  return false;
                } else {
                  if (data7.id !== undefined) {
                    if (typeof data7.id !== 'string') {
                      validate36.errors = [
                        {
                          instancePath: instancePath + '/input/id',
                          schemaPath: '#/allOf/1/properties/input/properties/id/type',
                          keyword: 'type',
                          params: { type: 'string' },
                          message: 'must be string',
                        },
                      ];
                      return false;
                    }
                  }
                }
              } else {
                validate36.errors = [
                  {
                    instancePath: instancePath + '/input',
                    schemaPath: '#/allOf/1/properties/input/type',
                    keyword: 'type',
                    params: { type: 'object' },
                    message: 'must be object',
                  },
                ];
                return false;
              }
            }
          }
        }
      } else {
        validate36.errors = [
          {
            instancePath,
            schemaPath: '#/allOf/1/type',
            keyword: 'type',
            params: { type: 'object' },
            message: 'must be object',
          },
        ];
        return false;
      }
    }
    var valid0 = _errs17 === errors;
  }
  validate36.errors = vErrors;
  return errors === 0;
}
validate36.evaluated = {
  props: { input: true, adminUser: true, user: true, site: true },
  dynamicProps: false,
  dynamicItems: false,
};
function validate33(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/authorize-edit-site/input.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate33.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  if (errors === 0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (
        (data.value === undefined && (missing0 = 'value')) ||
        (data.context === undefined && (missing0 = 'context'))
      ) {
        validate33.errors = [
          {
            instancePath,
            schemaPath: '#/required',
            keyword: 'required',
            params: { missingProperty: missing0 },
            message: "must have required property '" + missing0 + "'",
          },
        ];
        return false;
      } else {
        if (data.value !== undefined) {
          const _errs1 = errors;
          if (
            !validate34(data.value, {
              instancePath: instancePath + '/value',
              parentData: data,
              parentDataProperty: 'value',
              rootData,
              dynamicAnchors,
            })
          ) {
            vErrors = vErrors === null ? validate34.errors : vErrors.concat(validate34.errors);
            errors = vErrors.length;
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.context !== undefined) {
            const _errs2 = errors;
            if (
              !validate36(data.context, {
                instancePath: instancePath + '/context',
                parentData: data,
                parentDataProperty: 'context',
                rootData,
                dynamicAnchors,
              })
            ) {
              vErrors = vErrors === null ? validate36.errors : vErrors.concat(validate36.errors);
              errors = vErrors.length;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
        }
      }
    } else {
      validate33.errors = [
        {
          instancePath,
          schemaPath: '#/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        },
      ];
      return false;
    }
  }
  validate33.errors = vErrors;
  return errors === 0;
}
validate33.evaluated = {
  props: { value: true, context: true },
  dynamicProps: false,
  dynamicItems: false,
};
export const validateAuthorizeEditSiteResult = validate38;
const schema48 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/authorize-edit-site/result.json',
  title: 'AuthorizeEditSiteResult',
  type: 'object',
  properties: {
    value: { $ref: './value.json' },
    stop: {
      description:
        'If true, this is the last handler that will be called for the hook, and the result value will be used as the final result.',
      type: ['boolean', 'null'],
    },
  },
  required: ['value'],
};
function validate38(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/authorize-edit-site/result.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate38.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  if (errors === 0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (data.value === undefined && (missing0 = 'value')) {
        validate38.errors = [
          {
            instancePath,
            schemaPath: '#/required',
            keyword: 'required',
            params: { missingProperty: missing0 },
            message: "must have required property '" + missing0 + "'",
          },
        ];
        return false;
      } else {
        if (data.value !== undefined) {
          const _errs1 = errors;
          if (
            !validate34(data.value, {
              instancePath: instancePath + '/value',
              parentData: data,
              parentDataProperty: 'value',
              rootData,
              dynamicAnchors,
            })
          ) {
            vErrors = vErrors === null ? validate34.errors : vErrors.concat(validate34.errors);
            errors = vErrors.length;
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.stop !== undefined) {
            let data1 = data.stop;
            const _errs2 = errors;
            if (typeof data1 !== 'boolean' && data1 !== null) {
              validate38.errors = [
                {
                  instancePath: instancePath + '/stop',
                  schemaPath: '#/properties/stop/type',
                  keyword: 'type',
                  params: { type: schema48.properties.stop.type },
                  message: 'must be boolean,null',
                },
              ];
              return false;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
        }
      }
    } else {
      validate38.errors = [
        {
          instancePath,
          schemaPath: '#/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        },
      ];
      return false;
    }
  }
  validate38.errors = vErrors;
  return errors === 0;
}
validate38.evaluated = {
  props: { value: true, stop: true },
  dynamicProps: false,
  dynamicItems: false,
};
export const validateAuthorizeEditSiteDomainInput = validate40;
const schema49 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/authorize-edit-site-domain/input.json',
  title: 'AuthorizeEditSiteDomainInput',
  type: 'object',
  properties: { value: { $ref: './value.json' }, context: { $ref: './context.json' } },
  required: ['value', 'context'],
};
const schema50 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/authorize-edit-site-domain/value.json',
  title: 'AuthorizeEditSiteDomainValue',
  $ref: '../../authorize-hook-result/authorize-hook-result.json',
};
function validate41(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/authorize-edit-site-domain/value.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate41.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  const _errs1 = errors;
  let valid1 = false;
  let passing0 = null;
  const _errs2 = errors;
  if (errors === _errs2) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (data.ok === undefined && (missing0 = 'ok')) {
        const err0 = {
          instancePath,
          schemaPath: '../../authorize-hook-result/authorize-hook-result.json/oneOf/0/required',
          keyword: 'required',
          params: { missingProperty: missing0 },
          message: "must have required property '" + missing0 + "'",
        };
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      } else {
        if (data.ok !== undefined) {
          if (true !== data.ok) {
            const err1 = {
              instancePath: instancePath + '/ok',
              schemaPath:
                '../../authorize-hook-result/authorize-hook-result.json/oneOf/0/properties/ok/const',
              keyword: 'const',
              params: { allowedValue: true },
              message: 'must be equal to constant',
            };
            if (vErrors === null) {
              vErrors = [err1];
            } else {
              vErrors.push(err1);
            }
            errors++;
          }
        }
      }
    } else {
      const err2 = {
        instancePath,
        schemaPath: '../../authorize-hook-result/authorize-hook-result.json/oneOf/0/type',
        keyword: 'type',
        params: { type: 'object' },
        message: 'must be object',
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
  }
  var _valid0 = _errs2 === errors;
  if (_valid0) {
    valid1 = true;
    passing0 = 0;
    var props0 = {};
    props0.ok = true;
  }
  const _errs5 = errors;
  if (errors === _errs5) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing1;
      if (
        (data.ok === undefined && (missing1 = 'ok')) ||
        (data.message === undefined && (missing1 = 'message'))
      ) {
        const err3 = {
          instancePath,
          schemaPath: '../../authorize-hook-result/authorize-hook-result.json/oneOf/1/required',
          keyword: 'required',
          params: { missingProperty: missing1 },
          message: "must have required property '" + missing1 + "'",
        };
        if (vErrors === null) {
          vErrors = [err3];
        } else {
          vErrors.push(err3);
        }
        errors++;
      } else {
        if (data.ok !== undefined) {
          const _errs7 = errors;
          if (false !== data.ok) {
            const err4 = {
              instancePath: instancePath + '/ok',
              schemaPath:
                '../../authorize-hook-result/authorize-hook-result.json/oneOf/1/properties/ok/const',
              keyword: 'const',
              params: { allowedValue: false },
              message: 'must be equal to constant',
            };
            if (vErrors === null) {
              vErrors = [err4];
            } else {
              vErrors.push(err4);
            }
            errors++;
          }
          var valid3 = _errs7 === errors;
        } else {
          var valid3 = true;
        }
        if (valid3) {
          if (data.message !== undefined) {
            const _errs8 = errors;
            if (typeof data.message !== 'string') {
              const err5 = {
                instancePath: instancePath + '/message',
                schemaPath:
                  '../../authorize-hook-result/authorize-hook-result.json/oneOf/1/properties/message/type',
                keyword: 'type',
                params: { type: 'string' },
                message: 'must be string',
              };
              if (vErrors === null) {
                vErrors = [err5];
              } else {
                vErrors.push(err5);
              }
              errors++;
            }
            var valid3 = _errs8 === errors;
          } else {
            var valid3 = true;
          }
        }
      }
    } else {
      const err6 = {
        instancePath,
        schemaPath: '../../authorize-hook-result/authorize-hook-result.json/oneOf/1/type',
        keyword: 'type',
        params: { type: 'object' },
        message: 'must be object',
      };
      if (vErrors === null) {
        vErrors = [err6];
      } else {
        vErrors.push(err6);
      }
      errors++;
    }
  }
  var _valid0 = _errs5 === errors;
  if (_valid0 && valid1) {
    valid1 = false;
    passing0 = [passing0, 1];
  } else {
    if (_valid0) {
      valid1 = true;
      passing0 = 1;
      if (props0 !== true) {
        props0 = props0 || {};
        props0.ok = true;
        props0.message = true;
      }
    }
  }
  if (!valid1) {
    const err7 = {
      instancePath,
      schemaPath: '../../authorize-hook-result/authorize-hook-result.json/oneOf',
      keyword: 'oneOf',
      params: { passingSchemas: passing0 },
      message: 'must match exactly one schema in oneOf',
    };
    if (vErrors === null) {
      vErrors = [err7];
    } else {
      vErrors.push(err7);
    }
    errors++;
    validate41.errors = vErrors;
    return false;
  } else {
    errors = _errs1;
    if (vErrors !== null) {
      if (_errs1) {
        vErrors.length = _errs1;
      } else {
        vErrors = null;
      }
    }
  }
  validate41.errors = vErrors;
  evaluated0.props = props0;
  return errors === 0;
}
validate41.evaluated = { dynamicProps: true, dynamicItems: false };
const schema52 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/authorize-edit-site-domain/context.json',
  title: 'AuthorizeEditSiteDomainContext',
  description: 'The context of the request. Either adminUser or user will be set.',
  allOf: [
    { $ref: '../../request-context/base-request-context.json' },
    {
      type: 'object',
      properties: {
        input: {
          type: 'object',
          properties: { id: { description: 'The ID of the site being edited.', type: 'string' } },
          required: ['id'],
        },
      },
      required: ['input'],
    },
  ],
};
function validate43(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/authorize-edit-site-domain/context.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate43.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  const _errs0 = errors;
  const _errs1 = errors;
  if (errors === _errs1) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      if (data.adminUser !== undefined) {
        let data0 = data.adminUser;
        const _errs3 = errors;
        if (errors === _errs3) {
          if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
            let missing0;
            if (
              (data0.id === undefined && (missing0 = 'id')) ||
              (data0.email === undefined && (missing0 = 'email'))
            ) {
              validate43.errors = [
                {
                  instancePath: instancePath + '/adminUser',
                  schemaPath:
                    '../../request-context/base-request-context.json/properties/adminUser/required',
                  keyword: 'required',
                  params: { missingProperty: missing0 },
                  message: "must have required property '" + missing0 + "'",
                },
              ];
              return false;
            } else {
              if (data0.id !== undefined) {
                const _errs5 = errors;
                if (typeof data0.id !== 'string') {
                  validate43.errors = [
                    {
                      instancePath: instancePath + '/adminUser/id',
                      schemaPath:
                        '../../request-context/base-request-context.json/properties/adminUser/properties/id/type',
                      keyword: 'type',
                      params: { type: 'string' },
                      message: 'must be string',
                    },
                  ];
                  return false;
                }
                var valid3 = _errs5 === errors;
              } else {
                var valid3 = true;
              }
              if (valid3) {
                if (data0.email !== undefined) {
                  const _errs7 = errors;
                  if (typeof data0.email !== 'string') {
                    validate43.errors = [
                      {
                        instancePath: instancePath + '/adminUser/email',
                        schemaPath:
                          '../../request-context/base-request-context.json/properties/adminUser/properties/email/type',
                        keyword: 'type',
                        params: { type: 'string' },
                        message: 'must be string',
                      },
                    ];
                    return false;
                  }
                  var valid3 = _errs7 === errors;
                } else {
                  var valid3 = true;
                }
              }
            }
          } else {
            validate43.errors = [
              {
                instancePath: instancePath + '/adminUser',
                schemaPath:
                  '../../request-context/base-request-context.json/properties/adminUser/type',
                keyword: 'type',
                params: { type: 'object' },
                message: 'must be object',
              },
            ];
            return false;
          }
        }
        var valid2 = _errs3 === errors;
      } else {
        var valid2 = true;
      }
      if (valid2) {
        if (data.user !== undefined) {
          let data3 = data.user;
          const _errs9 = errors;
          if (errors === _errs9) {
            if (data3 && typeof data3 == 'object' && !Array.isArray(data3)) {
              let missing1;
              if (data3.id === undefined && (missing1 = 'id')) {
                validate43.errors = [
                  {
                    instancePath: instancePath + '/user',
                    schemaPath:
                      '../../request-context/base-request-context.json/properties/user/required',
                    keyword: 'required',
                    params: { missingProperty: missing1 },
                    message: "must have required property '" + missing1 + "'",
                  },
                ];
                return false;
              } else {
                if (data3.id !== undefined) {
                  if (typeof data3.id !== 'string') {
                    validate43.errors = [
                      {
                        instancePath: instancePath + '/user/id',
                        schemaPath:
                          '../../request-context/base-request-context.json/properties/user/properties/id/type',
                        keyword: 'type',
                        params: { type: 'string' },
                        message: 'must be string',
                      },
                    ];
                    return false;
                  }
                }
              }
            } else {
              validate43.errors = [
                {
                  instancePath: instancePath + '/user',
                  schemaPath:
                    '../../request-context/base-request-context.json/properties/user/type',
                  keyword: 'type',
                  params: { type: 'object' },
                  message: 'must be object',
                },
              ];
              return false;
            }
          }
          var valid2 = _errs9 === errors;
        } else {
          var valid2 = true;
        }
        if (valid2) {
          if (data.site !== undefined) {
            let data5 = data.site;
            const _errs13 = errors;
            if (errors === _errs13) {
              if (data5 && typeof data5 == 'object' && !Array.isArray(data5)) {
                let missing2;
                if (data5.id === undefined && (missing2 = 'id')) {
                  validate43.errors = [
                    {
                      instancePath: instancePath + '/site',
                      schemaPath:
                        '../../request-context/base-request-context.json/properties/site/required',
                      keyword: 'required',
                      params: { missingProperty: missing2 },
                      message: "must have required property '" + missing2 + "'",
                    },
                  ];
                  return false;
                } else {
                  if (data5.id !== undefined) {
                    if (typeof data5.id !== 'string') {
                      validate43.errors = [
                        {
                          instancePath: instancePath + '/site/id',
                          schemaPath:
                            '../../request-context/base-request-context.json/properties/site/properties/id/type',
                          keyword: 'type',
                          params: { type: 'string' },
                          message: 'must be string',
                        },
                      ];
                      return false;
                    }
                  }
                }
              } else {
                validate43.errors = [
                  {
                    instancePath: instancePath + '/site',
                    schemaPath:
                      '../../request-context/base-request-context.json/properties/site/type',
                    keyword: 'type',
                    params: { type: 'object' },
                    message: 'must be object',
                  },
                ];
                return false;
              }
            }
            var valid2 = _errs13 === errors;
          } else {
            var valid2 = true;
          }
        }
      }
    } else {
      validate43.errors = [
        {
          instancePath,
          schemaPath: '../../request-context/base-request-context.json/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        },
      ];
      return false;
    }
  }
  var valid0 = _errs0 === errors;
  if (valid0) {
    const _errs17 = errors;
    if (errors === _errs17) {
      if (data && typeof data == 'object' && !Array.isArray(data)) {
        let missing3;
        if (data.input === undefined && (missing3 = 'input')) {
          validate43.errors = [
            {
              instancePath,
              schemaPath: '#/allOf/1/required',
              keyword: 'required',
              params: { missingProperty: missing3 },
              message: "must have required property '" + missing3 + "'",
            },
          ];
          return false;
        } else {
          if (data.input !== undefined) {
            let data7 = data.input;
            const _errs19 = errors;
            if (errors === _errs19) {
              if (data7 && typeof data7 == 'object' && !Array.isArray(data7)) {
                let missing4;
                if (data7.id === undefined && (missing4 = 'id')) {
                  validate43.errors = [
                    {
                      instancePath: instancePath + '/input',
                      schemaPath: '#/allOf/1/properties/input/required',
                      keyword: 'required',
                      params: { missingProperty: missing4 },
                      message: "must have required property '" + missing4 + "'",
                    },
                  ];
                  return false;
                } else {
                  if (data7.id !== undefined) {
                    if (typeof data7.id !== 'string') {
                      validate43.errors = [
                        {
                          instancePath: instancePath + '/input/id',
                          schemaPath: '#/allOf/1/properties/input/properties/id/type',
                          keyword: 'type',
                          params: { type: 'string' },
                          message: 'must be string',
                        },
                      ];
                      return false;
                    }
                  }
                }
              } else {
                validate43.errors = [
                  {
                    instancePath: instancePath + '/input',
                    schemaPath: '#/allOf/1/properties/input/type',
                    keyword: 'type',
                    params: { type: 'object' },
                    message: 'must be object',
                  },
                ];
                return false;
              }
            }
          }
        }
      } else {
        validate43.errors = [
          {
            instancePath,
            schemaPath: '#/allOf/1/type',
            keyword: 'type',
            params: { type: 'object' },
            message: 'must be object',
          },
        ];
        return false;
      }
    }
    var valid0 = _errs17 === errors;
  }
  validate43.errors = vErrors;
  return errors === 0;
}
validate43.evaluated = {
  props: { input: true, adminUser: true, user: true, site: true },
  dynamicProps: false,
  dynamicItems: false,
};
function validate40(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/authorize-edit-site-domain/input.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate40.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  if (errors === 0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (
        (data.value === undefined && (missing0 = 'value')) ||
        (data.context === undefined && (missing0 = 'context'))
      ) {
        validate40.errors = [
          {
            instancePath,
            schemaPath: '#/required',
            keyword: 'required',
            params: { missingProperty: missing0 },
            message: "must have required property '" + missing0 + "'",
          },
        ];
        return false;
      } else {
        if (data.value !== undefined) {
          const _errs1 = errors;
          if (
            !validate41(data.value, {
              instancePath: instancePath + '/value',
              parentData: data,
              parentDataProperty: 'value',
              rootData,
              dynamicAnchors,
            })
          ) {
            vErrors = vErrors === null ? validate41.errors : vErrors.concat(validate41.errors);
            errors = vErrors.length;
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.context !== undefined) {
            const _errs2 = errors;
            if (
              !validate43(data.context, {
                instancePath: instancePath + '/context',
                parentData: data,
                parentDataProperty: 'context',
                rootData,
                dynamicAnchors,
              })
            ) {
              vErrors = vErrors === null ? validate43.errors : vErrors.concat(validate43.errors);
              errors = vErrors.length;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
        }
      }
    } else {
      validate40.errors = [
        {
          instancePath,
          schemaPath: '#/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        },
      ];
      return false;
    }
  }
  validate40.errors = vErrors;
  return errors === 0;
}
validate40.evaluated = {
  props: { value: true, context: true },
  dynamicProps: false,
  dynamicItems: false,
};
export const validateAuthorizeEditSiteDomainResult = validate45;
const schema54 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/authorize-edit-site-domain/result.json',
  title: 'AuthorizeEditSiteDomainResult',
  type: 'object',
  properties: {
    value: { $ref: './value.json' },
    stop: {
      description:
        'If true, this is the last handler that will be called for the hook, and the result value will be used as the final result.',
      type: ['boolean', 'null'],
    },
  },
  required: ['value'],
};
function validate45(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/authorize-edit-site-domain/result.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate45.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  if (errors === 0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (data.value === undefined && (missing0 = 'value')) {
        validate45.errors = [
          {
            instancePath,
            schemaPath: '#/required',
            keyword: 'required',
            params: { missingProperty: missing0 },
            message: "must have required property '" + missing0 + "'",
          },
        ];
        return false;
      } else {
        if (data.value !== undefined) {
          const _errs1 = errors;
          if (
            !validate41(data.value, {
              instancePath: instancePath + '/value',
              parentData: data,
              parentDataProperty: 'value',
              rootData,
              dynamicAnchors,
            })
          ) {
            vErrors = vErrors === null ? validate41.errors : vErrors.concat(validate41.errors);
            errors = vErrors.length;
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.stop !== undefined) {
            let data1 = data.stop;
            const _errs2 = errors;
            if (typeof data1 !== 'boolean' && data1 !== null) {
              validate45.errors = [
                {
                  instancePath: instancePath + '/stop',
                  schemaPath: '#/properties/stop/type',
                  keyword: 'type',
                  params: { type: schema54.properties.stop.type },
                  message: 'must be boolean,null',
                },
              ];
              return false;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
        }
      }
    } else {
      validate45.errors = [
        {
          instancePath,
          schemaPath: '#/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        },
      ];
      return false;
    }
  }
  validate45.errors = vErrors;
  return errors === 0;
}
validate45.evaluated = {
  props: { value: true, stop: true },
  dynamicProps: false,
  dynamicItems: false,
};
export const validateBeforeCreateSiteInput = validate47;
const schema55 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/before-create-site/input.json',
  title: 'BeforeCreateSiteInput',
  type: 'object',
  properties: { value: { $ref: './value.json' }, context: { $ref: './context.json' } },
  required: ['value', 'context'],
};
const schema56 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/before-create-site/value.json',
  title: 'BeforeCreateSiteValue',
  type: 'object',
  properties: {
    name: { type: 'string' },
    domain: { type: 'string' },
    orgId: { type: 'string', description: 'The ID of the org that will own the site.' },
    customFields: { type: 'array', items: { $ref: '../../custom-field/custom-field.json' } },
  },
  required: ['name', 'customFields'],
};
const schema57 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/custom-field/custom-field.json',
  title: 'CustomField',
  oneOf: [
    {
      title: 'BooleanCustomField',
      type: 'object',
      properties: {
        type: { const: 'Boolean' },
        key: { type: 'string' },
        value: { type: 'boolean' },
      },
      required: ['type', 'key', 'value'],
    },
    {
      title: 'IntCustomField',
      type: 'object',
      properties: { type: { const: 'Int' }, key: { type: 'string' }, value: { type: 'integer' } },
      required: ['type', 'key', 'value'],
    },
    {
      title: 'RichTextCustomField',
      type: 'object',
      properties: {
        type: { const: 'RichText' },
        key: { type: 'string' },
        value: { $ref: 'rich-text.json' },
      },
      required: ['type', 'key', 'value'],
    },
    {
      title: 'StringCustomField',
      type: 'object',
      properties: { type: { const: 'String' }, key: { type: 'string' }, value: { type: 'string' } },
      required: ['type', 'key', 'value'],
    },
    {
      title: 'OptionalBooleanCustomField',
      type: 'object',
      properties: {
        type: { const: 'OptionalBoolean' },
        key: { type: 'string' },
        value: { oneOf: [{ type: 'boolean' }, { type: 'null' }] },
      },
      required: ['type', 'key', 'value'],
    },
    {
      title: 'OptionalIntCustomField',
      type: 'object',
      properties: {
        type: { const: 'OptionalInt' },
        key: { type: 'string' },
        value: { oneOf: [{ type: 'integer' }, { type: 'null' }] },
      },
      required: ['type', 'key', 'value'],
    },
    {
      title: 'OptionalRichTextCustomField',
      type: 'object',
      properties: {
        type: { const: 'OptionalRichText' },
        key: { type: 'string' },
        value: { oneOf: [{ $ref: 'rich-text.json' }, { type: 'null' }] },
      },
      required: ['type', 'key', 'value'],
    },
    {
      title: 'OptionalStringCustomField',
      type: 'object',
      properties: {
        type: { const: 'OptionalString' },
        key: { type: 'string' },
        value: { oneOf: [{ type: 'string' }, { type: 'null' }] },
      },
      required: ['type', 'key', 'value'],
    },
  ],
};
function validate49(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/custom-field/custom-field.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate49.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  const _errs0 = errors;
  let valid0 = false;
  let passing0 = null;
  const _errs1 = errors;
  if (errors === _errs1) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (
        (data.type === undefined && (missing0 = 'type')) ||
        (data.key === undefined && (missing0 = 'key')) ||
        (data.value === undefined && (missing0 = 'value'))
      ) {
        const err0 = {
          instancePath,
          schemaPath: '#/oneOf/0/required',
          keyword: 'required',
          params: { missingProperty: missing0 },
          message: "must have required property '" + missing0 + "'",
        };
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      } else {
        if (data.type !== undefined) {
          const _errs3 = errors;
          if ('Boolean' !== data.type) {
            const err1 = {
              instancePath: instancePath + '/type',
              schemaPath: '#/oneOf/0/properties/type/const',
              keyword: 'const',
              params: { allowedValue: 'Boolean' },
              message: 'must be equal to constant',
            };
            if (vErrors === null) {
              vErrors = [err1];
            } else {
              vErrors.push(err1);
            }
            errors++;
          }
          var valid1 = _errs3 === errors;
        } else {
          var valid1 = true;
        }
        if (valid1) {
          if (data.key !== undefined) {
            const _errs4 = errors;
            if (typeof data.key !== 'string') {
              const err2 = {
                instancePath: instancePath + '/key',
                schemaPath: '#/oneOf/0/properties/key/type',
                keyword: 'type',
                params: { type: 'string' },
                message: 'must be string',
              };
              if (vErrors === null) {
                vErrors = [err2];
              } else {
                vErrors.push(err2);
              }
              errors++;
            }
            var valid1 = _errs4 === errors;
          } else {
            var valid1 = true;
          }
          if (valid1) {
            if (data.value !== undefined) {
              const _errs6 = errors;
              if (typeof data.value !== 'boolean') {
                const err3 = {
                  instancePath: instancePath + '/value',
                  schemaPath: '#/oneOf/0/properties/value/type',
                  keyword: 'type',
                  params: { type: 'boolean' },
                  message: 'must be boolean',
                };
                if (vErrors === null) {
                  vErrors = [err3];
                } else {
                  vErrors.push(err3);
                }
                errors++;
              }
              var valid1 = _errs6 === errors;
            } else {
              var valid1 = true;
            }
          }
        }
      }
    } else {
      const err4 = {
        instancePath,
        schemaPath: '#/oneOf/0/type',
        keyword: 'type',
        params: { type: 'object' },
        message: 'must be object',
      };
      if (vErrors === null) {
        vErrors = [err4];
      } else {
        vErrors.push(err4);
      }
      errors++;
    }
  }
  var _valid0 = _errs1 === errors;
  if (_valid0) {
    valid0 = true;
    passing0 = 0;
    var props0 = {};
    props0.type = true;
    props0.key = true;
    props0.value = true;
  }
  const _errs8 = errors;
  if (errors === _errs8) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing1;
      if (
        (data.type === undefined && (missing1 = 'type')) ||
        (data.key === undefined && (missing1 = 'key')) ||
        (data.value === undefined && (missing1 = 'value'))
      ) {
        const err5 = {
          instancePath,
          schemaPath: '#/oneOf/1/required',
          keyword: 'required',
          params: { missingProperty: missing1 },
          message: "must have required property '" + missing1 + "'",
        };
        if (vErrors === null) {
          vErrors = [err5];
        } else {
          vErrors.push(err5);
        }
        errors++;
      } else {
        if (data.type !== undefined) {
          const _errs10 = errors;
          if ('Int' !== data.type) {
            const err6 = {
              instancePath: instancePath + '/type',
              schemaPath: '#/oneOf/1/properties/type/const',
              keyword: 'const',
              params: { allowedValue: 'Int' },
              message: 'must be equal to constant',
            };
            if (vErrors === null) {
              vErrors = [err6];
            } else {
              vErrors.push(err6);
            }
            errors++;
          }
          var valid2 = _errs10 === errors;
        } else {
          var valid2 = true;
        }
        if (valid2) {
          if (data.key !== undefined) {
            const _errs11 = errors;
            if (typeof data.key !== 'string') {
              const err7 = {
                instancePath: instancePath + '/key',
                schemaPath: '#/oneOf/1/properties/key/type',
                keyword: 'type',
                params: { type: 'string' },
                message: 'must be string',
              };
              if (vErrors === null) {
                vErrors = [err7];
              } else {
                vErrors.push(err7);
              }
              errors++;
            }
            var valid2 = _errs11 === errors;
          } else {
            var valid2 = true;
          }
          if (valid2) {
            if (data.value !== undefined) {
              let data5 = data.value;
              const _errs13 = errors;
              if (!(typeof data5 == 'number' && !(data5 % 1) && !isNaN(data5) && isFinite(data5))) {
                const err8 = {
                  instancePath: instancePath + '/value',
                  schemaPath: '#/oneOf/1/properties/value/type',
                  keyword: 'type',
                  params: { type: 'integer' },
                  message: 'must be integer',
                };
                if (vErrors === null) {
                  vErrors = [err8];
                } else {
                  vErrors.push(err8);
                }
                errors++;
              }
              var valid2 = _errs13 === errors;
            } else {
              var valid2 = true;
            }
          }
        }
      }
    } else {
      const err9 = {
        instancePath,
        schemaPath: '#/oneOf/1/type',
        keyword: 'type',
        params: { type: 'object' },
        message: 'must be object',
      };
      if (vErrors === null) {
        vErrors = [err9];
      } else {
        vErrors.push(err9);
      }
      errors++;
    }
  }
  var _valid0 = _errs8 === errors;
  if (_valid0 && valid0) {
    valid0 = false;
    passing0 = [passing0, 1];
  } else {
    if (_valid0) {
      valid0 = true;
      passing0 = 1;
      if (props0 !== true) {
        props0 = props0 || {};
        props0.type = true;
        props0.key = true;
        props0.value = true;
      }
    }
    const _errs15 = errors;
    if (errors === _errs15) {
      if (data && typeof data == 'object' && !Array.isArray(data)) {
        let missing2;
        if (
          (data.type === undefined && (missing2 = 'type')) ||
          (data.key === undefined && (missing2 = 'key')) ||
          (data.value === undefined && (missing2 = 'value'))
        ) {
          const err10 = {
            instancePath,
            schemaPath: '#/oneOf/2/required',
            keyword: 'required',
            params: { missingProperty: missing2 },
            message: "must have required property '" + missing2 + "'",
          };
          if (vErrors === null) {
            vErrors = [err10];
          } else {
            vErrors.push(err10);
          }
          errors++;
        } else {
          if (data.type !== undefined) {
            const _errs17 = errors;
            if ('RichText' !== data.type) {
              const err11 = {
                instancePath: instancePath + '/type',
                schemaPath: '#/oneOf/2/properties/type/const',
                keyword: 'const',
                params: { allowedValue: 'RichText' },
                message: 'must be equal to constant',
              };
              if (vErrors === null) {
                vErrors = [err11];
              } else {
                vErrors.push(err11);
              }
              errors++;
            }
            var valid3 = _errs17 === errors;
          } else {
            var valid3 = true;
          }
          if (valid3) {
            if (data.key !== undefined) {
              const _errs18 = errors;
              if (typeof data.key !== 'string') {
                const err12 = {
                  instancePath: instancePath + '/key',
                  schemaPath: '#/oneOf/2/properties/key/type',
                  keyword: 'type',
                  params: { type: 'string' },
                  message: 'must be string',
                };
                if (vErrors === null) {
                  vErrors = [err12];
                } else {
                  vErrors.push(err12);
                }
                errors++;
              }
              var valid3 = _errs18 === errors;
            } else {
              var valid3 = true;
            }
            if (valid3) {
              if (data.value !== undefined) {
                let data8 = data.value;
                const _errs20 = errors;
                const _errs22 = errors;
                let valid5 = false;
                let passing1 = null;
                const _errs23 = errors;
                if (errors === _errs23) {
                  if (data8 && typeof data8 == 'object' && !Array.isArray(data8)) {
                    let missing3;
                    if (data8.delta === undefined && (missing3 = 'delta')) {
                      const err13 = {
                        instancePath: instancePath + '/value',
                        schemaPath: 'rich-text.json/oneOf/0/required',
                        keyword: 'required',
                        params: { missingProperty: missing3 },
                        message: "must have required property '" + missing3 + "'",
                      };
                      if (vErrors === null) {
                        vErrors = [err13];
                      } else {
                        vErrors.push(err13);
                      }
                      errors++;
                    } else {
                      if (data8.delta !== undefined) {
                        let data9 = data8.delta;
                        const _errs25 = errors;
                        if (errors === _errs25) {
                          if (data9 && typeof data9 == 'object' && !Array.isArray(data9)) {
                            let missing4;
                            if (data9.ops === undefined && (missing4 = 'ops')) {
                              const err14 = {
                                instancePath: instancePath + '/value/delta',
                                schemaPath: 'rich-text.json/oneOf/0/properties/delta/required',
                                keyword: 'required',
                                params: { missingProperty: missing4 },
                                message: "must have required property '" + missing4 + "'",
                              };
                              if (vErrors === null) {
                                vErrors = [err14];
                              } else {
                                vErrors.push(err14);
                              }
                              errors++;
                            } else {
                              if (data9.ops !== undefined) {
                                let data10 = data9.ops;
                                const _errs27 = errors;
                                if (errors === _errs27) {
                                  if (Array.isArray(data10)) {
                                    var valid8 = true;
                                    const len0 = data10.length;
                                    for (let i0 = 0; i0 < len0; i0++) {
                                      let data11 = data10[i0];
                                      const _errs29 = errors;
                                      if (errors === _errs29) {
                                        if (
                                          data11 &&
                                          typeof data11 == 'object' &&
                                          !Array.isArray(data11)
                                        ) {
                                          let missing5;
                                          if (
                                            data11.insert === undefined &&
                                            (missing5 = 'insert')
                                          ) {
                                            const err15 = {
                                              instancePath: instancePath + '/value/delta/ops/' + i0,
                                              schemaPath:
                                                'rich-text.json/oneOf/0/properties/delta/properties/ops/items/required',
                                              keyword: 'required',
                                              params: { missingProperty: missing5 },
                                              message:
                                                "must have required property '" + missing5 + "'",
                                            };
                                            if (vErrors === null) {
                                              vErrors = [err15];
                                            } else {
                                              vErrors.push(err15);
                                            }
                                            errors++;
                                          } else {
                                            if (data11.insert !== undefined) {
                                              let data12 = data11.insert;
                                              const _errs31 = errors;
                                              const _errs32 = errors;
                                              let valid10 = false;
                                              let passing2 = null;
                                              const _errs33 = errors;
                                              if (typeof data12 !== 'string') {
                                                const err16 = {
                                                  instancePath:
                                                    instancePath +
                                                    '/value/delta/ops/' +
                                                    i0 +
                                                    '/insert',
                                                  schemaPath:
                                                    'rich-text.json/oneOf/0/properties/delta/properties/ops/items/properties/insert/oneOf/0/type',
                                                  keyword: 'type',
                                                  params: { type: 'string' },
                                                  message: 'must be string',
                                                };
                                                if (vErrors === null) {
                                                  vErrors = [err16];
                                                } else {
                                                  vErrors.push(err16);
                                                }
                                                errors++;
                                              }
                                              var _valid2 = _errs33 === errors;
                                              if (_valid2) {
                                                valid10 = true;
                                                passing2 = 0;
                                              }
                                              const _errs35 = errors;
                                              if (
                                                !(
                                                  data12 &&
                                                  typeof data12 == 'object' &&
                                                  !Array.isArray(data12)
                                                )
                                              ) {
                                                const err17 = {
                                                  instancePath:
                                                    instancePath +
                                                    '/value/delta/ops/' +
                                                    i0 +
                                                    '/insert',
                                                  schemaPath:
                                                    'rich-text.json/oneOf/0/properties/delta/properties/ops/items/properties/insert/oneOf/1/type',
                                                  keyword: 'type',
                                                  params: { type: 'object' },
                                                  message: 'must be object',
                                                };
                                                if (vErrors === null) {
                                                  vErrors = [err17];
                                                } else {
                                                  vErrors.push(err17);
                                                }
                                                errors++;
                                              }
                                              var _valid2 = _errs35 === errors;
                                              if (_valid2 && valid10) {
                                                valid10 = false;
                                                passing2 = [passing2, 1];
                                              } else {
                                                if (_valid2) {
                                                  valid10 = true;
                                                  passing2 = 1;
                                                }
                                              }
                                              if (!valid10) {
                                                const err18 = {
                                                  instancePath:
                                                    instancePath +
                                                    '/value/delta/ops/' +
                                                    i0 +
                                                    '/insert',
                                                  schemaPath:
                                                    'rich-text.json/oneOf/0/properties/delta/properties/ops/items/properties/insert/oneOf',
                                                  keyword: 'oneOf',
                                                  params: { passingSchemas: passing2 },
                                                  message: 'must match exactly one schema in oneOf',
                                                };
                                                if (vErrors === null) {
                                                  vErrors = [err18];
                                                } else {
                                                  vErrors.push(err18);
                                                }
                                                errors++;
                                              } else {
                                                errors = _errs32;
                                                if (vErrors !== null) {
                                                  if (_errs32) {
                                                    vErrors.length = _errs32;
                                                  } else {
                                                    vErrors = null;
                                                  }
                                                }
                                              }
                                              var valid9 = _errs31 === errors;
                                            } else {
                                              var valid9 = true;
                                            }
                                            if (valid9) {
                                              if (data11.attributes !== undefined) {
                                                let data13 = data11.attributes;
                                                const _errs37 = errors;
                                                if (
                                                  !(
                                                    data13 &&
                                                    typeof data13 == 'object' &&
                                                    !Array.isArray(data13)
                                                  )
                                                ) {
                                                  const err19 = {
                                                    instancePath:
                                                      instancePath +
                                                      '/value/delta/ops/' +
                                                      i0 +
                                                      '/attributes',
                                                    schemaPath:
                                                      'rich-text.json/oneOf/0/properties/delta/properties/ops/items/properties/attributes/type',
                                                    keyword: 'type',
                                                    params: { type: 'object' },
                                                    message: 'must be object',
                                                  };
                                                  if (vErrors === null) {
                                                    vErrors = [err19];
                                                  } else {
                                                    vErrors.push(err19);
                                                  }
                                                  errors++;
                                                }
                                                var valid9 = _errs37 === errors;
                                              } else {
                                                var valid9 = true;
                                              }
                                            }
                                          }
                                        } else {
                                          const err20 = {
                                            instancePath: instancePath + '/value/delta/ops/' + i0,
                                            schemaPath:
                                              'rich-text.json/oneOf/0/properties/delta/properties/ops/items/type',
                                            keyword: 'type',
                                            params: { type: 'object' },
                                            message: 'must be object',
                                          };
                                          if (vErrors === null) {
                                            vErrors = [err20];
                                          } else {
                                            vErrors.push(err20);
                                          }
                                          errors++;
                                        }
                                      }
                                      var valid8 = _errs29 === errors;
                                      if (!valid8) {
                                        break;
                                      }
                                    }
                                  } else {
                                    const err21 = {
                                      instancePath: instancePath + '/value/delta/ops',
                                      schemaPath:
                                        'rich-text.json/oneOf/0/properties/delta/properties/ops/type',
                                      keyword: 'type',
                                      params: { type: 'array' },
                                      message: 'must be array',
                                    };
                                    if (vErrors === null) {
                                      vErrors = [err21];
                                    } else {
                                      vErrors.push(err21);
                                    }
                                    errors++;
                                  }
                                }
                              }
                            }
                          } else {
                            const err22 = {
                              instancePath: instancePath + '/value/delta',
                              schemaPath: 'rich-text.json/oneOf/0/properties/delta/type',
                              keyword: 'type',
                              params: { type: 'object' },
                              message: 'must be object',
                            };
                            if (vErrors === null) {
                              vErrors = [err22];
                            } else {
                              vErrors.push(err22);
                            }
                            errors++;
                          }
                        }
                      }
                    }
                  } else {
                    const err23 = {
                      instancePath: instancePath + '/value',
                      schemaPath: 'rich-text.json/oneOf/0/type',
                      keyword: 'type',
                      params: { type: 'object' },
                      message: 'must be object',
                    };
                    if (vErrors === null) {
                      vErrors = [err23];
                    } else {
                      vErrors.push(err23);
                    }
                    errors++;
                  }
                }
                var _valid1 = _errs23 === errors;
                if (_valid1) {
                  valid5 = true;
                  passing1 = 0;
                  var props1 = {};
                  props1.delta = true;
                }
                if (!valid5) {
                  const err24 = {
                    instancePath: instancePath + '/value',
                    schemaPath: 'rich-text.json/oneOf',
                    keyword: 'oneOf',
                    params: { passingSchemas: passing1 },
                    message: 'must match exactly one schema in oneOf',
                  };
                  if (vErrors === null) {
                    vErrors = [err24];
                  } else {
                    vErrors.push(err24);
                  }
                  errors++;
                } else {
                  errors = _errs22;
                  if (vErrors !== null) {
                    if (_errs22) {
                      vErrors.length = _errs22;
                    } else {
                      vErrors = null;
                    }
                  }
                }
                var valid3 = _errs20 === errors;
              } else {
                var valid3 = true;
              }
            }
          }
        }
      } else {
        const err25 = {
          instancePath,
          schemaPath: '#/oneOf/2/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        };
        if (vErrors === null) {
          vErrors = [err25];
        } else {
          vErrors.push(err25);
        }
        errors++;
      }
    }
    var _valid0 = _errs15 === errors;
    if (_valid0 && valid0) {
      valid0 = false;
      passing0 = [passing0, 2];
    } else {
      if (_valid0) {
        valid0 = true;
        passing0 = 2;
        if (props0 !== true) {
          props0 = props0 || {};
          props0.type = true;
          props0.key = true;
          props0.value = true;
        }
      }
      const _errs39 = errors;
      if (errors === _errs39) {
        if (data && typeof data == 'object' && !Array.isArray(data)) {
          let missing6;
          if (
            (data.type === undefined && (missing6 = 'type')) ||
            (data.key === undefined && (missing6 = 'key')) ||
            (data.value === undefined && (missing6 = 'value'))
          ) {
            const err26 = {
              instancePath,
              schemaPath: '#/oneOf/3/required',
              keyword: 'required',
              params: { missingProperty: missing6 },
              message: "must have required property '" + missing6 + "'",
            };
            if (vErrors === null) {
              vErrors = [err26];
            } else {
              vErrors.push(err26);
            }
            errors++;
          } else {
            if (data.type !== undefined) {
              const _errs41 = errors;
              if ('String' !== data.type) {
                const err27 = {
                  instancePath: instancePath + '/type',
                  schemaPath: '#/oneOf/3/properties/type/const',
                  keyword: 'const',
                  params: { allowedValue: 'String' },
                  message: 'must be equal to constant',
                };
                if (vErrors === null) {
                  vErrors = [err27];
                } else {
                  vErrors.push(err27);
                }
                errors++;
              }
              var valid11 = _errs41 === errors;
            } else {
              var valid11 = true;
            }
            if (valid11) {
              if (data.key !== undefined) {
                const _errs42 = errors;
                if (typeof data.key !== 'string') {
                  const err28 = {
                    instancePath: instancePath + '/key',
                    schemaPath: '#/oneOf/3/properties/key/type',
                    keyword: 'type',
                    params: { type: 'string' },
                    message: 'must be string',
                  };
                  if (vErrors === null) {
                    vErrors = [err28];
                  } else {
                    vErrors.push(err28);
                  }
                  errors++;
                }
                var valid11 = _errs42 === errors;
              } else {
                var valid11 = true;
              }
              if (valid11) {
                if (data.value !== undefined) {
                  const _errs44 = errors;
                  if (typeof data.value !== 'string') {
                    const err29 = {
                      instancePath: instancePath + '/value',
                      schemaPath: '#/oneOf/3/properties/value/type',
                      keyword: 'type',
                      params: { type: 'string' },
                      message: 'must be string',
                    };
                    if (vErrors === null) {
                      vErrors = [err29];
                    } else {
                      vErrors.push(err29);
                    }
                    errors++;
                  }
                  var valid11 = _errs44 === errors;
                } else {
                  var valid11 = true;
                }
              }
            }
          }
        } else {
          const err30 = {
            instancePath,
            schemaPath: '#/oneOf/3/type',
            keyword: 'type',
            params: { type: 'object' },
            message: 'must be object',
          };
          if (vErrors === null) {
            vErrors = [err30];
          } else {
            vErrors.push(err30);
          }
          errors++;
        }
      }
      var _valid0 = _errs39 === errors;
      if (_valid0 && valid0) {
        valid0 = false;
        passing0 = [passing0, 3];
      } else {
        if (_valid0) {
          valid0 = true;
          passing0 = 3;
          if (props0 !== true) {
            props0 = props0 || {};
            props0.type = true;
            props0.key = true;
            props0.value = true;
          }
        }
        const _errs46 = errors;
        if (errors === _errs46) {
          if (data && typeof data == 'object' && !Array.isArray(data)) {
            let missing7;
            if (
              (data.type === undefined && (missing7 = 'type')) ||
              (data.key === undefined && (missing7 = 'key')) ||
              (data.value === undefined && (missing7 = 'value'))
            ) {
              const err31 = {
                instancePath,
                schemaPath: '#/oneOf/4/required',
                keyword: 'required',
                params: { missingProperty: missing7 },
                message: "must have required property '" + missing7 + "'",
              };
              if (vErrors === null) {
                vErrors = [err31];
              } else {
                vErrors.push(err31);
              }
              errors++;
            } else {
              if (data.type !== undefined) {
                const _errs48 = errors;
                if ('OptionalBoolean' !== data.type) {
                  const err32 = {
                    instancePath: instancePath + '/type',
                    schemaPath: '#/oneOf/4/properties/type/const',
                    keyword: 'const',
                    params: { allowedValue: 'OptionalBoolean' },
                    message: 'must be equal to constant',
                  };
                  if (vErrors === null) {
                    vErrors = [err32];
                  } else {
                    vErrors.push(err32);
                  }
                  errors++;
                }
                var valid12 = _errs48 === errors;
              } else {
                var valid12 = true;
              }
              if (valid12) {
                if (data.key !== undefined) {
                  const _errs49 = errors;
                  if (typeof data.key !== 'string') {
                    const err33 = {
                      instancePath: instancePath + '/key',
                      schemaPath: '#/oneOf/4/properties/key/type',
                      keyword: 'type',
                      params: { type: 'string' },
                      message: 'must be string',
                    };
                    if (vErrors === null) {
                      vErrors = [err33];
                    } else {
                      vErrors.push(err33);
                    }
                    errors++;
                  }
                  var valid12 = _errs49 === errors;
                } else {
                  var valid12 = true;
                }
                if (valid12) {
                  if (data.value !== undefined) {
                    let data19 = data.value;
                    const _errs51 = errors;
                    const _errs52 = errors;
                    let valid13 = false;
                    let passing3 = null;
                    const _errs53 = errors;
                    if (typeof data19 !== 'boolean') {
                      const err34 = {
                        instancePath: instancePath + '/value',
                        schemaPath: '#/oneOf/4/properties/value/oneOf/0/type',
                        keyword: 'type',
                        params: { type: 'boolean' },
                        message: 'must be boolean',
                      };
                      if (vErrors === null) {
                        vErrors = [err34];
                      } else {
                        vErrors.push(err34);
                      }
                      errors++;
                    }
                    var _valid3 = _errs53 === errors;
                    if (_valid3) {
                      valid13 = true;
                      passing3 = 0;
                    }
                    const _errs55 = errors;
                    if (data19 !== null) {
                      const err35 = {
                        instancePath: instancePath + '/value',
                        schemaPath: '#/oneOf/4/properties/value/oneOf/1/type',
                        keyword: 'type',
                        params: { type: 'null' },
                        message: 'must be null',
                      };
                      if (vErrors === null) {
                        vErrors = [err35];
                      } else {
                        vErrors.push(err35);
                      }
                      errors++;
                    }
                    var _valid3 = _errs55 === errors;
                    if (_valid3 && valid13) {
                      valid13 = false;
                      passing3 = [passing3, 1];
                    } else {
                      if (_valid3) {
                        valid13 = true;
                        passing3 = 1;
                      }
                    }
                    if (!valid13) {
                      const err36 = {
                        instancePath: instancePath + '/value',
                        schemaPath: '#/oneOf/4/properties/value/oneOf',
                        keyword: 'oneOf',
                        params: { passingSchemas: passing3 },
                        message: 'must match exactly one schema in oneOf',
                      };
                      if (vErrors === null) {
                        vErrors = [err36];
                      } else {
                        vErrors.push(err36);
                      }
                      errors++;
                    } else {
                      errors = _errs52;
                      if (vErrors !== null) {
                        if (_errs52) {
                          vErrors.length = _errs52;
                        } else {
                          vErrors = null;
                        }
                      }
                    }
                    var valid12 = _errs51 === errors;
                  } else {
                    var valid12 = true;
                  }
                }
              }
            }
          } else {
            const err37 = {
              instancePath,
              schemaPath: '#/oneOf/4/type',
              keyword: 'type',
              params: { type: 'object' },
              message: 'must be object',
            };
            if (vErrors === null) {
              vErrors = [err37];
            } else {
              vErrors.push(err37);
            }
            errors++;
          }
        }
        var _valid0 = _errs46 === errors;
        if (_valid0 && valid0) {
          valid0 = false;
          passing0 = [passing0, 4];
        } else {
          if (_valid0) {
            valid0 = true;
            passing0 = 4;
            if (props0 !== true) {
              props0 = props0 || {};
              props0.type = true;
              props0.key = true;
              props0.value = true;
            }
          }
          const _errs57 = errors;
          if (errors === _errs57) {
            if (data && typeof data == 'object' && !Array.isArray(data)) {
              let missing8;
              if (
                (data.type === undefined && (missing8 = 'type')) ||
                (data.key === undefined && (missing8 = 'key')) ||
                (data.value === undefined && (missing8 = 'value'))
              ) {
                const err38 = {
                  instancePath,
                  schemaPath: '#/oneOf/5/required',
                  keyword: 'required',
                  params: { missingProperty: missing8 },
                  message: "must have required property '" + missing8 + "'",
                };
                if (vErrors === null) {
                  vErrors = [err38];
                } else {
                  vErrors.push(err38);
                }
                errors++;
              } else {
                if (data.type !== undefined) {
                  const _errs59 = errors;
                  if ('OptionalInt' !== data.type) {
                    const err39 = {
                      instancePath: instancePath + '/type',
                      schemaPath: '#/oneOf/5/properties/type/const',
                      keyword: 'const',
                      params: { allowedValue: 'OptionalInt' },
                      message: 'must be equal to constant',
                    };
                    if (vErrors === null) {
                      vErrors = [err39];
                    } else {
                      vErrors.push(err39);
                    }
                    errors++;
                  }
                  var valid14 = _errs59 === errors;
                } else {
                  var valid14 = true;
                }
                if (valid14) {
                  if (data.key !== undefined) {
                    const _errs60 = errors;
                    if (typeof data.key !== 'string') {
                      const err40 = {
                        instancePath: instancePath + '/key',
                        schemaPath: '#/oneOf/5/properties/key/type',
                        keyword: 'type',
                        params: { type: 'string' },
                        message: 'must be string',
                      };
                      if (vErrors === null) {
                        vErrors = [err40];
                      } else {
                        vErrors.push(err40);
                      }
                      errors++;
                    }
                    var valid14 = _errs60 === errors;
                  } else {
                    var valid14 = true;
                  }
                  if (valid14) {
                    if (data.value !== undefined) {
                      let data22 = data.value;
                      const _errs62 = errors;
                      const _errs63 = errors;
                      let valid15 = false;
                      let passing4 = null;
                      const _errs64 = errors;
                      if (
                        !(
                          typeof data22 == 'number' &&
                          !(data22 % 1) &&
                          !isNaN(data22) &&
                          isFinite(data22)
                        )
                      ) {
                        const err41 = {
                          instancePath: instancePath + '/value',
                          schemaPath: '#/oneOf/5/properties/value/oneOf/0/type',
                          keyword: 'type',
                          params: { type: 'integer' },
                          message: 'must be integer',
                        };
                        if (vErrors === null) {
                          vErrors = [err41];
                        } else {
                          vErrors.push(err41);
                        }
                        errors++;
                      }
                      var _valid4 = _errs64 === errors;
                      if (_valid4) {
                        valid15 = true;
                        passing4 = 0;
                      }
                      const _errs66 = errors;
                      if (data22 !== null) {
                        const err42 = {
                          instancePath: instancePath + '/value',
                          schemaPath: '#/oneOf/5/properties/value/oneOf/1/type',
                          keyword: 'type',
                          params: { type: 'null' },
                          message: 'must be null',
                        };
                        if (vErrors === null) {
                          vErrors = [err42];
                        } else {
                          vErrors.push(err42);
                        }
                        errors++;
                      }
                      var _valid4 = _errs66 === errors;
                      if (_valid4 && valid15) {
                        valid15 = false;
                        passing4 = [passing4, 1];
                      } else {
                        if (_valid4) {
                          valid15 = true;
                          passing4 = 1;
                        }
                      }
                      if (!valid15) {
                        const err43 = {
                          instancePath: instancePath + '/value',
                          schemaPath: '#/oneOf/5/properties/value/oneOf',
                          keyword: 'oneOf',
                          params: { passingSchemas: passing4 },
                          message: 'must match exactly one schema in oneOf',
                        };
                        if (vErrors === null) {
                          vErrors = [err43];
                        } else {
                          vErrors.push(err43);
                        }
                        errors++;
                      } else {
                        errors = _errs63;
                        if (vErrors !== null) {
                          if (_errs63) {
                            vErrors.length = _errs63;
                          } else {
                            vErrors = null;
                          }
                        }
                      }
                      var valid14 = _errs62 === errors;
                    } else {
                      var valid14 = true;
                    }
                  }
                }
              }
            } else {
              const err44 = {
                instancePath,
                schemaPath: '#/oneOf/5/type',
                keyword: 'type',
                params: { type: 'object' },
                message: 'must be object',
              };
              if (vErrors === null) {
                vErrors = [err44];
              } else {
                vErrors.push(err44);
              }
              errors++;
            }
          }
          var _valid0 = _errs57 === errors;
          if (_valid0 && valid0) {
            valid0 = false;
            passing0 = [passing0, 5];
          } else {
            if (_valid0) {
              valid0 = true;
              passing0 = 5;
              if (props0 !== true) {
                props0 = props0 || {};
                props0.type = true;
                props0.key = true;
                props0.value = true;
              }
            }
            const _errs68 = errors;
            if (errors === _errs68) {
              if (data && typeof data == 'object' && !Array.isArray(data)) {
                let missing9;
                if (
                  (data.type === undefined && (missing9 = 'type')) ||
                  (data.key === undefined && (missing9 = 'key')) ||
                  (data.value === undefined && (missing9 = 'value'))
                ) {
                  const err45 = {
                    instancePath,
                    schemaPath: '#/oneOf/6/required',
                    keyword: 'required',
                    params: { missingProperty: missing9 },
                    message: "must have required property '" + missing9 + "'",
                  };
                  if (vErrors === null) {
                    vErrors = [err45];
                  } else {
                    vErrors.push(err45);
                  }
                  errors++;
                } else {
                  if (data.type !== undefined) {
                    const _errs70 = errors;
                    if ('OptionalRichText' !== data.type) {
                      const err46 = {
                        instancePath: instancePath + '/type',
                        schemaPath: '#/oneOf/6/properties/type/const',
                        keyword: 'const',
                        params: { allowedValue: 'OptionalRichText' },
                        message: 'must be equal to constant',
                      };
                      if (vErrors === null) {
                        vErrors = [err46];
                      } else {
                        vErrors.push(err46);
                      }
                      errors++;
                    }
                    var valid16 = _errs70 === errors;
                  } else {
                    var valid16 = true;
                  }
                  if (valid16) {
                    if (data.key !== undefined) {
                      const _errs71 = errors;
                      if (typeof data.key !== 'string') {
                        const err47 = {
                          instancePath: instancePath + '/key',
                          schemaPath: '#/oneOf/6/properties/key/type',
                          keyword: 'type',
                          params: { type: 'string' },
                          message: 'must be string',
                        };
                        if (vErrors === null) {
                          vErrors = [err47];
                        } else {
                          vErrors.push(err47);
                        }
                        errors++;
                      }
                      var valid16 = _errs71 === errors;
                    } else {
                      var valid16 = true;
                    }
                    if (valid16) {
                      if (data.value !== undefined) {
                        let data25 = data.value;
                        const _errs73 = errors;
                        const _errs74 = errors;
                        let valid17 = false;
                        let passing5 = null;
                        const _errs75 = errors;
                        const _errs77 = errors;
                        let valid19 = false;
                        let passing6 = null;
                        const _errs78 = errors;
                        if (errors === _errs78) {
                          if (data25 && typeof data25 == 'object' && !Array.isArray(data25)) {
                            let missing10;
                            if (data25.delta === undefined && (missing10 = 'delta')) {
                              const err48 = {
                                instancePath: instancePath + '/value',
                                schemaPath: 'rich-text.json/oneOf/0/required',
                                keyword: 'required',
                                params: { missingProperty: missing10 },
                                message: "must have required property '" + missing10 + "'",
                              };
                              if (vErrors === null) {
                                vErrors = [err48];
                              } else {
                                vErrors.push(err48);
                              }
                              errors++;
                            } else {
                              if (data25.delta !== undefined) {
                                let data26 = data25.delta;
                                const _errs80 = errors;
                                if (errors === _errs80) {
                                  if (
                                    data26 &&
                                    typeof data26 == 'object' &&
                                    !Array.isArray(data26)
                                  ) {
                                    let missing11;
                                    if (data26.ops === undefined && (missing11 = 'ops')) {
                                      const err49 = {
                                        instancePath: instancePath + '/value/delta',
                                        schemaPath:
                                          'rich-text.json/oneOf/0/properties/delta/required',
                                        keyword: 'required',
                                        params: { missingProperty: missing11 },
                                        message: "must have required property '" + missing11 + "'",
                                      };
                                      if (vErrors === null) {
                                        vErrors = [err49];
                                      } else {
                                        vErrors.push(err49);
                                      }
                                      errors++;
                                    } else {
                                      if (data26.ops !== undefined) {
                                        let data27 = data26.ops;
                                        const _errs82 = errors;
                                        if (errors === _errs82) {
                                          if (Array.isArray(data27)) {
                                            var valid22 = true;
                                            const len1 = data27.length;
                                            for (let i1 = 0; i1 < len1; i1++) {
                                              let data28 = data27[i1];
                                              const _errs84 = errors;
                                              if (errors === _errs84) {
                                                if (
                                                  data28 &&
                                                  typeof data28 == 'object' &&
                                                  !Array.isArray(data28)
                                                ) {
                                                  let missing12;
                                                  if (
                                                    data28.insert === undefined &&
                                                    (missing12 = 'insert')
                                                  ) {
                                                    const err50 = {
                                                      instancePath:
                                                        instancePath + '/value/delta/ops/' + i1,
                                                      schemaPath:
                                                        'rich-text.json/oneOf/0/properties/delta/properties/ops/items/required',
                                                      keyword: 'required',
                                                      params: { missingProperty: missing12 },
                                                      message:
                                                        "must have required property '" +
                                                        missing12 +
                                                        "'",
                                                    };
                                                    if (vErrors === null) {
                                                      vErrors = [err50];
                                                    } else {
                                                      vErrors.push(err50);
                                                    }
                                                    errors++;
                                                  } else {
                                                    if (data28.insert !== undefined) {
                                                      let data29 = data28.insert;
                                                      const _errs86 = errors;
                                                      const _errs87 = errors;
                                                      let valid24 = false;
                                                      let passing7 = null;
                                                      const _errs88 = errors;
                                                      if (typeof data29 !== 'string') {
                                                        const err51 = {
                                                          instancePath:
                                                            instancePath +
                                                            '/value/delta/ops/' +
                                                            i1 +
                                                            '/insert',
                                                          schemaPath:
                                                            'rich-text.json/oneOf/0/properties/delta/properties/ops/items/properties/insert/oneOf/0/type',
                                                          keyword: 'type',
                                                          params: { type: 'string' },
                                                          message: 'must be string',
                                                        };
                                                        if (vErrors === null) {
                                                          vErrors = [err51];
                                                        } else {
                                                          vErrors.push(err51);
                                                        }
                                                        errors++;
                                                      }
                                                      var _valid7 = _errs88 === errors;
                                                      if (_valid7) {
                                                        valid24 = true;
                                                        passing7 = 0;
                                                      }
                                                      const _errs90 = errors;
                                                      if (
                                                        !(
                                                          data29 &&
                                                          typeof data29 == 'object' &&
                                                          !Array.isArray(data29)
                                                        )
                                                      ) {
                                                        const err52 = {
                                                          instancePath:
                                                            instancePath +
                                                            '/value/delta/ops/' +
                                                            i1 +
                                                            '/insert',
                                                          schemaPath:
                                                            'rich-text.json/oneOf/0/properties/delta/properties/ops/items/properties/insert/oneOf/1/type',
                                                          keyword: 'type',
                                                          params: { type: 'object' },
                                                          message: 'must be object',
                                                        };
                                                        if (vErrors === null) {
                                                          vErrors = [err52];
                                                        } else {
                                                          vErrors.push(err52);
                                                        }
                                                        errors++;
                                                      }
                                                      var _valid7 = _errs90 === errors;
                                                      if (_valid7 && valid24) {
                                                        valid24 = false;
                                                        passing7 = [passing7, 1];
                                                      } else {
                                                        if (_valid7) {
                                                          valid24 = true;
                                                          passing7 = 1;
                                                        }
                                                      }
                                                      if (!valid24) {
                                                        const err53 = {
                                                          instancePath:
                                                            instancePath +
                                                            '/value/delta/ops/' +
                                                            i1 +
                                                            '/insert',
                                                          schemaPath:
                                                            'rich-text.json/oneOf/0/properties/delta/properties/ops/items/properties/insert/oneOf',
                                                          keyword: 'oneOf',
                                                          params: { passingSchemas: passing7 },
                                                          message:
                                                            'must match exactly one schema in oneOf',
                                                        };
                                                        if (vErrors === null) {
                                                          vErrors = [err53];
                                                        } else {
                                                          vErrors.push(err53);
                                                        }
                                                        errors++;
                                                      } else {
                                                        errors = _errs87;
                                                        if (vErrors !== null) {
                                                          if (_errs87) {
                                                            vErrors.length = _errs87;
                                                          } else {
                                                            vErrors = null;
                                                          }
                                                        }
                                                      }
                                                      var valid23 = _errs86 === errors;
                                                    } else {
                                                      var valid23 = true;
                                                    }
                                                    if (valid23) {
                                                      if (data28.attributes !== undefined) {
                                                        let data30 = data28.attributes;
                                                        const _errs92 = errors;
                                                        if (
                                                          !(
                                                            data30 &&
                                                            typeof data30 == 'object' &&
                                                            !Array.isArray(data30)
                                                          )
                                                        ) {
                                                          const err54 = {
                                                            instancePath:
                                                              instancePath +
                                                              '/value/delta/ops/' +
                                                              i1 +
                                                              '/attributes',
                                                            schemaPath:
                                                              'rich-text.json/oneOf/0/properties/delta/properties/ops/items/properties/attributes/type',
                                                            keyword: 'type',
                                                            params: { type: 'object' },
                                                            message: 'must be object',
                                                          };
                                                          if (vErrors === null) {
                                                            vErrors = [err54];
                                                          } else {
                                                            vErrors.push(err54);
                                                          }
                                                          errors++;
                                                        }
                                                        var valid23 = _errs92 === errors;
                                                      } else {
                                                        var valid23 = true;
                                                      }
                                                    }
                                                  }
                                                } else {
                                                  const err55 = {
                                                    instancePath:
                                                      instancePath + '/value/delta/ops/' + i1,
                                                    schemaPath:
                                                      'rich-text.json/oneOf/0/properties/delta/properties/ops/items/type',
                                                    keyword: 'type',
                                                    params: { type: 'object' },
                                                    message: 'must be object',
                                                  };
                                                  if (vErrors === null) {
                                                    vErrors = [err55];
                                                  } else {
                                                    vErrors.push(err55);
                                                  }
                                                  errors++;
                                                }
                                              }
                                              var valid22 = _errs84 === errors;
                                              if (!valid22) {
                                                break;
                                              }
                                            }
                                          } else {
                                            const err56 = {
                                              instancePath: instancePath + '/value/delta/ops',
                                              schemaPath:
                                                'rich-text.json/oneOf/0/properties/delta/properties/ops/type',
                                              keyword: 'type',
                                              params: { type: 'array' },
                                              message: 'must be array',
                                            };
                                            if (vErrors === null) {
                                              vErrors = [err56];
                                            } else {
                                              vErrors.push(err56);
                                            }
                                            errors++;
                                          }
                                        }
                                      }
                                    }
                                  } else {
                                    const err57 = {
                                      instancePath: instancePath + '/value/delta',
                                      schemaPath: 'rich-text.json/oneOf/0/properties/delta/type',
                                      keyword: 'type',
                                      params: { type: 'object' },
                                      message: 'must be object',
                                    };
                                    if (vErrors === null) {
                                      vErrors = [err57];
                                    } else {
                                      vErrors.push(err57);
                                    }
                                    errors++;
                                  }
                                }
                              }
                            }
                          } else {
                            const err58 = {
                              instancePath: instancePath + '/value',
                              schemaPath: 'rich-text.json/oneOf/0/type',
                              keyword: 'type',
                              params: { type: 'object' },
                              message: 'must be object',
                            };
                            if (vErrors === null) {
                              vErrors = [err58];
                            } else {
                              vErrors.push(err58);
                            }
                            errors++;
                          }
                        }
                        var _valid6 = _errs78 === errors;
                        if (_valid6) {
                          valid19 = true;
                          passing6 = 0;
                          var props2 = {};
                          props2.delta = true;
                        }
                        if (!valid19) {
                          const err59 = {
                            instancePath: instancePath + '/value',
                            schemaPath: 'rich-text.json/oneOf',
                            keyword: 'oneOf',
                            params: { passingSchemas: passing6 },
                            message: 'must match exactly one schema in oneOf',
                          };
                          if (vErrors === null) {
                            vErrors = [err59];
                          } else {
                            vErrors.push(err59);
                          }
                          errors++;
                        } else {
                          errors = _errs77;
                          if (vErrors !== null) {
                            if (_errs77) {
                              vErrors.length = _errs77;
                            } else {
                              vErrors = null;
                            }
                          }
                        }
                        var _valid5 = _errs75 === errors;
                        if (_valid5) {
                          valid17 = true;
                          passing5 = 0;
                        }
                        const _errs94 = errors;
                        if (data25 !== null) {
                          const err60 = {
                            instancePath: instancePath + '/value',
                            schemaPath: '#/oneOf/6/properties/value/oneOf/1/type',
                            keyword: 'type',
                            params: { type: 'null' },
                            message: 'must be null',
                          };
                          if (vErrors === null) {
                            vErrors = [err60];
                          } else {
                            vErrors.push(err60);
                          }
                          errors++;
                        }
                        var _valid5 = _errs94 === errors;
                        if (_valid5 && valid17) {
                          valid17 = false;
                          passing5 = [passing5, 1];
                        } else {
                          if (_valid5) {
                            valid17 = true;
                            passing5 = 1;
                          }
                        }
                        if (!valid17) {
                          const err61 = {
                            instancePath: instancePath + '/value',
                            schemaPath: '#/oneOf/6/properties/value/oneOf',
                            keyword: 'oneOf',
                            params: { passingSchemas: passing5 },
                            message: 'must match exactly one schema in oneOf',
                          };
                          if (vErrors === null) {
                            vErrors = [err61];
                          } else {
                            vErrors.push(err61);
                          }
                          errors++;
                        } else {
                          errors = _errs74;
                          if (vErrors !== null) {
                            if (_errs74) {
                              vErrors.length = _errs74;
                            } else {
                              vErrors = null;
                            }
                          }
                        }
                        var valid16 = _errs73 === errors;
                      } else {
                        var valid16 = true;
                      }
                    }
                  }
                }
              } else {
                const err62 = {
                  instancePath,
                  schemaPath: '#/oneOf/6/type',
                  keyword: 'type',
                  params: { type: 'object' },
                  message: 'must be object',
                };
                if (vErrors === null) {
                  vErrors = [err62];
                } else {
                  vErrors.push(err62);
                }
                errors++;
              }
            }
            var _valid0 = _errs68 === errors;
            if (_valid0 && valid0) {
              valid0 = false;
              passing0 = [passing0, 6];
            } else {
              if (_valid0) {
                valid0 = true;
                passing0 = 6;
                if (props0 !== true) {
                  props0 = props0 || {};
                  props0.type = true;
                  props0.key = true;
                  props0.value = true;
                }
              }
              const _errs96 = errors;
              if (errors === _errs96) {
                if (data && typeof data == 'object' && !Array.isArray(data)) {
                  let missing13;
                  if (
                    (data.type === undefined && (missing13 = 'type')) ||
                    (data.key === undefined && (missing13 = 'key')) ||
                    (data.value === undefined && (missing13 = 'value'))
                  ) {
                    const err63 = {
                      instancePath,
                      schemaPath: '#/oneOf/7/required',
                      keyword: 'required',
                      params: { missingProperty: missing13 },
                      message: "must have required property '" + missing13 + "'",
                    };
                    if (vErrors === null) {
                      vErrors = [err63];
                    } else {
                      vErrors.push(err63);
                    }
                    errors++;
                  } else {
                    if (data.type !== undefined) {
                      const _errs98 = errors;
                      if ('OptionalString' !== data.type) {
                        const err64 = {
                          instancePath: instancePath + '/type',
                          schemaPath: '#/oneOf/7/properties/type/const',
                          keyword: 'const',
                          params: { allowedValue: 'OptionalString' },
                          message: 'must be equal to constant',
                        };
                        if (vErrors === null) {
                          vErrors = [err64];
                        } else {
                          vErrors.push(err64);
                        }
                        errors++;
                      }
                      var valid25 = _errs98 === errors;
                    } else {
                      var valid25 = true;
                    }
                    if (valid25) {
                      if (data.key !== undefined) {
                        const _errs99 = errors;
                        if (typeof data.key !== 'string') {
                          const err65 = {
                            instancePath: instancePath + '/key',
                            schemaPath: '#/oneOf/7/properties/key/type',
                            keyword: 'type',
                            params: { type: 'string' },
                            message: 'must be string',
                          };
                          if (vErrors === null) {
                            vErrors = [err65];
                          } else {
                            vErrors.push(err65);
                          }
                          errors++;
                        }
                        var valid25 = _errs99 === errors;
                      } else {
                        var valid25 = true;
                      }
                      if (valid25) {
                        if (data.value !== undefined) {
                          let data33 = data.value;
                          const _errs101 = errors;
                          const _errs102 = errors;
                          let valid26 = false;
                          let passing8 = null;
                          const _errs103 = errors;
                          if (typeof data33 !== 'string') {
                            const err66 = {
                              instancePath: instancePath + '/value',
                              schemaPath: '#/oneOf/7/properties/value/oneOf/0/type',
                              keyword: 'type',
                              params: { type: 'string' },
                              message: 'must be string',
                            };
                            if (vErrors === null) {
                              vErrors = [err66];
                            } else {
                              vErrors.push(err66);
                            }
                            errors++;
                          }
                          var _valid8 = _errs103 === errors;
                          if (_valid8) {
                            valid26 = true;
                            passing8 = 0;
                          }
                          const _errs105 = errors;
                          if (data33 !== null) {
                            const err67 = {
                              instancePath: instancePath + '/value',
                              schemaPath: '#/oneOf/7/properties/value/oneOf/1/type',
                              keyword: 'type',
                              params: { type: 'null' },
                              message: 'must be null',
                            };
                            if (vErrors === null) {
                              vErrors = [err67];
                            } else {
                              vErrors.push(err67);
                            }
                            errors++;
                          }
                          var _valid8 = _errs105 === errors;
                          if (_valid8 && valid26) {
                            valid26 = false;
                            passing8 = [passing8, 1];
                          } else {
                            if (_valid8) {
                              valid26 = true;
                              passing8 = 1;
                            }
                          }
                          if (!valid26) {
                            const err68 = {
                              instancePath: instancePath + '/value',
                              schemaPath: '#/oneOf/7/properties/value/oneOf',
                              keyword: 'oneOf',
                              params: { passingSchemas: passing8 },
                              message: 'must match exactly one schema in oneOf',
                            };
                            if (vErrors === null) {
                              vErrors = [err68];
                            } else {
                              vErrors.push(err68);
                            }
                            errors++;
                          } else {
                            errors = _errs102;
                            if (vErrors !== null) {
                              if (_errs102) {
                                vErrors.length = _errs102;
                              } else {
                                vErrors = null;
                              }
                            }
                          }
                          var valid25 = _errs101 === errors;
                        } else {
                          var valid25 = true;
                        }
                      }
                    }
                  }
                } else {
                  const err69 = {
                    instancePath,
                    schemaPath: '#/oneOf/7/type',
                    keyword: 'type',
                    params: { type: 'object' },
                    message: 'must be object',
                  };
                  if (vErrors === null) {
                    vErrors = [err69];
                  } else {
                    vErrors.push(err69);
                  }
                  errors++;
                }
              }
              var _valid0 = _errs96 === errors;
              if (_valid0 && valid0) {
                valid0 = false;
                passing0 = [passing0, 7];
              } else {
                if (_valid0) {
                  valid0 = true;
                  passing0 = 7;
                  if (props0 !== true) {
                    props0 = props0 || {};
                    props0.type = true;
                    props0.key = true;
                    props0.value = true;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (!valid0) {
    const err70 = {
      instancePath,
      schemaPath: '#/oneOf',
      keyword: 'oneOf',
      params: { passingSchemas: passing0 },
      message: 'must match exactly one schema in oneOf',
    };
    if (vErrors === null) {
      vErrors = [err70];
    } else {
      vErrors.push(err70);
    }
    errors++;
    validate49.errors = vErrors;
    return false;
  } else {
    errors = _errs0;
    if (vErrors !== null) {
      if (_errs0) {
        vErrors.length = _errs0;
      } else {
        vErrors = null;
      }
    }
  }
  validate49.errors = vErrors;
  evaluated0.props = props0;
  return errors === 0;
}
validate49.evaluated = { dynamicProps: true, dynamicItems: false };
function validate48(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/before-create-site/value.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate48.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  if (errors === 0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (
        (data.name === undefined && (missing0 = 'name')) ||
        (data.customFields === undefined && (missing0 = 'customFields'))
      ) {
        validate48.errors = [
          {
            instancePath,
            schemaPath: '#/required',
            keyword: 'required',
            params: { missingProperty: missing0 },
            message: "must have required property '" + missing0 + "'",
          },
        ];
        return false;
      } else {
        if (data.name !== undefined) {
          const _errs1 = errors;
          if (typeof data.name !== 'string') {
            validate48.errors = [
              {
                instancePath: instancePath + '/name',
                schemaPath: '#/properties/name/type',
                keyword: 'type',
                params: { type: 'string' },
                message: 'must be string',
              },
            ];
            return false;
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.domain !== undefined) {
            const _errs3 = errors;
            if (typeof data.domain !== 'string') {
              validate48.errors = [
                {
                  instancePath: instancePath + '/domain',
                  schemaPath: '#/properties/domain/type',
                  keyword: 'type',
                  params: { type: 'string' },
                  message: 'must be string',
                },
              ];
              return false;
            }
            var valid0 = _errs3 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.orgId !== undefined) {
              const _errs5 = errors;
              if (typeof data.orgId !== 'string') {
                validate48.errors = [
                  {
                    instancePath: instancePath + '/orgId',
                    schemaPath: '#/properties/orgId/type',
                    keyword: 'type',
                    params: { type: 'string' },
                    message: 'must be string',
                  },
                ];
                return false;
              }
              var valid0 = _errs5 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.customFields !== undefined) {
                let data3 = data.customFields;
                const _errs7 = errors;
                if (errors === _errs7) {
                  if (Array.isArray(data3)) {
                    var valid1 = true;
                    const len0 = data3.length;
                    for (let i0 = 0; i0 < len0; i0++) {
                      const _errs9 = errors;
                      if (
                        !validate49(data3[i0], {
                          instancePath: instancePath + '/customFields/' + i0,
                          parentData: data3,
                          parentDataProperty: i0,
                          rootData,
                          dynamicAnchors,
                        })
                      ) {
                        vErrors =
                          vErrors === null ? validate49.errors : vErrors.concat(validate49.errors);
                        errors = vErrors.length;
                      }
                      var valid1 = _errs9 === errors;
                      if (!valid1) {
                        break;
                      }
                    }
                  } else {
                    validate48.errors = [
                      {
                        instancePath: instancePath + '/customFields',
                        schemaPath: '#/properties/customFields/type',
                        keyword: 'type',
                        params: { type: 'array' },
                        message: 'must be array',
                      },
                    ];
                    return false;
                  }
                }
                var valid0 = _errs7 === errors;
              } else {
                var valid0 = true;
              }
            }
          }
        }
      }
    } else {
      validate48.errors = [
        {
          instancePath,
          schemaPath: '#/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        },
      ];
      return false;
    }
  }
  validate48.errors = vErrors;
  return errors === 0;
}
validate48.evaluated = {
  props: { name: true, domain: true, orgId: true, customFields: true },
  dynamicProps: false,
  dynamicItems: false,
};
const schema60 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/before-create-site/context.json',
  title: 'BeforeCreateSiteContext',
  description: 'The context of the request. Either adminUser or user will be set.',
  $ref: '../../request-context/base-request-context.json',
};
function validate52(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/before-create-site/context.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate52.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  const _errs0 = errors;
  if (errors === _errs0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      if (data.adminUser !== undefined) {
        let data0 = data.adminUser;
        const _errs2 = errors;
        if (errors === _errs2) {
          if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
            let missing0;
            if (
              (data0.id === undefined && (missing0 = 'id')) ||
              (data0.email === undefined && (missing0 = 'email'))
            ) {
              validate52.errors = [
                {
                  instancePath: instancePath + '/adminUser',
                  schemaPath:
                    '../../request-context/base-request-context.json/properties/adminUser/required',
                  keyword: 'required',
                  params: { missingProperty: missing0 },
                  message: "must have required property '" + missing0 + "'",
                },
              ];
              return false;
            } else {
              if (data0.id !== undefined) {
                const _errs4 = errors;
                if (typeof data0.id !== 'string') {
                  validate52.errors = [
                    {
                      instancePath: instancePath + '/adminUser/id',
                      schemaPath:
                        '../../request-context/base-request-context.json/properties/adminUser/properties/id/type',
                      keyword: 'type',
                      params: { type: 'string' },
                      message: 'must be string',
                    },
                  ];
                  return false;
                }
                var valid2 = _errs4 === errors;
              } else {
                var valid2 = true;
              }
              if (valid2) {
                if (data0.email !== undefined) {
                  const _errs6 = errors;
                  if (typeof data0.email !== 'string') {
                    validate52.errors = [
                      {
                        instancePath: instancePath + '/adminUser/email',
                        schemaPath:
                          '../../request-context/base-request-context.json/properties/adminUser/properties/email/type',
                        keyword: 'type',
                        params: { type: 'string' },
                        message: 'must be string',
                      },
                    ];
                    return false;
                  }
                  var valid2 = _errs6 === errors;
                } else {
                  var valid2 = true;
                }
              }
            }
          } else {
            validate52.errors = [
              {
                instancePath: instancePath + '/adminUser',
                schemaPath:
                  '../../request-context/base-request-context.json/properties/adminUser/type',
                keyword: 'type',
                params: { type: 'object' },
                message: 'must be object',
              },
            ];
            return false;
          }
        }
        var valid1 = _errs2 === errors;
      } else {
        var valid1 = true;
      }
      if (valid1) {
        if (data.user !== undefined) {
          let data3 = data.user;
          const _errs8 = errors;
          if (errors === _errs8) {
            if (data3 && typeof data3 == 'object' && !Array.isArray(data3)) {
              let missing1;
              if (data3.id === undefined && (missing1 = 'id')) {
                validate52.errors = [
                  {
                    instancePath: instancePath + '/user',
                    schemaPath:
                      '../../request-context/base-request-context.json/properties/user/required',
                    keyword: 'required',
                    params: { missingProperty: missing1 },
                    message: "must have required property '" + missing1 + "'",
                  },
                ];
                return false;
              } else {
                if (data3.id !== undefined) {
                  if (typeof data3.id !== 'string') {
                    validate52.errors = [
                      {
                        instancePath: instancePath + '/user/id',
                        schemaPath:
                          '../../request-context/base-request-context.json/properties/user/properties/id/type',
                        keyword: 'type',
                        params: { type: 'string' },
                        message: 'must be string',
                      },
                    ];
                    return false;
                  }
                }
              }
            } else {
              validate52.errors = [
                {
                  instancePath: instancePath + '/user',
                  schemaPath:
                    '../../request-context/base-request-context.json/properties/user/type',
                  keyword: 'type',
                  params: { type: 'object' },
                  message: 'must be object',
                },
              ];
              return false;
            }
          }
          var valid1 = _errs8 === errors;
        } else {
          var valid1 = true;
        }
        if (valid1) {
          if (data.site !== undefined) {
            let data5 = data.site;
            const _errs12 = errors;
            if (errors === _errs12) {
              if (data5 && typeof data5 == 'object' && !Array.isArray(data5)) {
                let missing2;
                if (data5.id === undefined && (missing2 = 'id')) {
                  validate52.errors = [
                    {
                      instancePath: instancePath + '/site',
                      schemaPath:
                        '../../request-context/base-request-context.json/properties/site/required',
                      keyword: 'required',
                      params: { missingProperty: missing2 },
                      message: "must have required property '" + missing2 + "'",
                    },
                  ];
                  return false;
                } else {
                  if (data5.id !== undefined) {
                    if (typeof data5.id !== 'string') {
                      validate52.errors = [
                        {
                          instancePath: instancePath + '/site/id',
                          schemaPath:
                            '../../request-context/base-request-context.json/properties/site/properties/id/type',
                          keyword: 'type',
                          params: { type: 'string' },
                          message: 'must be string',
                        },
                      ];
                      return false;
                    }
                  }
                }
              } else {
                validate52.errors = [
                  {
                    instancePath: instancePath + '/site',
                    schemaPath:
                      '../../request-context/base-request-context.json/properties/site/type',
                    keyword: 'type',
                    params: { type: 'object' },
                    message: 'must be object',
                  },
                ];
                return false;
              }
            }
            var valid1 = _errs12 === errors;
          } else {
            var valid1 = true;
          }
        }
      }
    } else {
      validate52.errors = [
        {
          instancePath,
          schemaPath: '../../request-context/base-request-context.json/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        },
      ];
      return false;
    }
  }
  validate52.errors = vErrors;
  return errors === 0;
}
validate52.evaluated = {
  props: { adminUser: true, user: true, site: true },
  dynamicProps: false,
  dynamicItems: false,
};
function validate47(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/before-create-site/input.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate47.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  if (errors === 0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (
        (data.value === undefined && (missing0 = 'value')) ||
        (data.context === undefined && (missing0 = 'context'))
      ) {
        validate47.errors = [
          {
            instancePath,
            schemaPath: '#/required',
            keyword: 'required',
            params: { missingProperty: missing0 },
            message: "must have required property '" + missing0 + "'",
          },
        ];
        return false;
      } else {
        if (data.value !== undefined) {
          const _errs1 = errors;
          if (
            !validate48(data.value, {
              instancePath: instancePath + '/value',
              parentData: data,
              parentDataProperty: 'value',
              rootData,
              dynamicAnchors,
            })
          ) {
            vErrors = vErrors === null ? validate48.errors : vErrors.concat(validate48.errors);
            errors = vErrors.length;
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.context !== undefined) {
            const _errs2 = errors;
            if (
              !validate52(data.context, {
                instancePath: instancePath + '/context',
                parentData: data,
                parentDataProperty: 'context',
                rootData,
                dynamicAnchors,
              })
            ) {
              vErrors = vErrors === null ? validate52.errors : vErrors.concat(validate52.errors);
              errors = vErrors.length;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
        }
      }
    } else {
      validate47.errors = [
        {
          instancePath,
          schemaPath: '#/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        },
      ];
      return false;
    }
  }
  validate47.errors = vErrors;
  return errors === 0;
}
validate47.evaluated = {
  props: { value: true, context: true },
  dynamicProps: false,
  dynamicItems: false,
};
export const validateBeforeCreateSiteResult = validate54;
const schema62 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/before-create-site/result.json',
  title: 'BeforeCreateSiteResult',
  oneOf: [
    {
      type: 'object',
      properties: {
        value: { $ref: './value.json' },
        stop: {
          description:
            'If true, this is the last handler that will be called for the hook, and the result value will be used as the final result.',
          type: ['boolean', 'null'],
        },
      },
      required: ['value'],
    },
    { $ref: '../../hook-reject-result/hook-reject-result.json' },
  ],
};
const schema63 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hook-reject-result/hook-reject-result.json',
  title: 'HookRejectResult',
  type: 'object',
  properties: { reject: { type: 'string' } },
  required: ['reject'],
};
function validate54(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/before-create-site/result.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate54.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  const _errs0 = errors;
  let valid0 = false;
  let passing0 = null;
  const _errs1 = errors;
  if (errors === _errs1) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (data.value === undefined && (missing0 = 'value')) {
        const err0 = {
          instancePath,
          schemaPath: '#/oneOf/0/required',
          keyword: 'required',
          params: { missingProperty: missing0 },
          message: "must have required property '" + missing0 + "'",
        };
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      } else {
        if (data.value !== undefined) {
          const _errs3 = errors;
          if (
            !validate48(data.value, {
              instancePath: instancePath + '/value',
              parentData: data,
              parentDataProperty: 'value',
              rootData,
              dynamicAnchors,
            })
          ) {
            vErrors = vErrors === null ? validate48.errors : vErrors.concat(validate48.errors);
            errors = vErrors.length;
          }
          var valid1 = _errs3 === errors;
        } else {
          var valid1 = true;
        }
        if (valid1) {
          if (data.stop !== undefined) {
            let data1 = data.stop;
            const _errs4 = errors;
            if (typeof data1 !== 'boolean' && data1 !== null) {
              const err1 = {
                instancePath: instancePath + '/stop',
                schemaPath: '#/oneOf/0/properties/stop/type',
                keyword: 'type',
                params: { type: schema62.oneOf[0].properties.stop.type },
                message: 'must be boolean,null',
              };
              if (vErrors === null) {
                vErrors = [err1];
              } else {
                vErrors.push(err1);
              }
              errors++;
            }
            var valid1 = _errs4 === errors;
          } else {
            var valid1 = true;
          }
        }
      }
    } else {
      const err2 = {
        instancePath,
        schemaPath: '#/oneOf/0/type',
        keyword: 'type',
        params: { type: 'object' },
        message: 'must be object',
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
  }
  var _valid0 = _errs1 === errors;
  if (_valid0) {
    valid0 = true;
    passing0 = 0;
    var props0 = {};
    props0.value = true;
    props0.stop = true;
  }
  const _errs6 = errors;
  const _errs7 = errors;
  if (errors === _errs7) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing1;
      if (data.reject === undefined && (missing1 = 'reject')) {
        const err3 = {
          instancePath,
          schemaPath: '../../hook-reject-result/hook-reject-result.json/required',
          keyword: 'required',
          params: { missingProperty: missing1 },
          message: "must have required property '" + missing1 + "'",
        };
        if (vErrors === null) {
          vErrors = [err3];
        } else {
          vErrors.push(err3);
        }
        errors++;
      } else {
        if (data.reject !== undefined) {
          if (typeof data.reject !== 'string') {
            const err4 = {
              instancePath: instancePath + '/reject',
              schemaPath: '../../hook-reject-result/hook-reject-result.json/properties/reject/type',
              keyword: 'type',
              params: { type: 'string' },
              message: 'must be string',
            };
            if (vErrors === null) {
              vErrors = [err4];
            } else {
              vErrors.push(err4);
            }
            errors++;
          }
        }
      }
    } else {
      const err5 = {
        instancePath,
        schemaPath: '../../hook-reject-result/hook-reject-result.json/type',
        keyword: 'type',
        params: { type: 'object' },
        message: 'must be object',
      };
      if (vErrors === null) {
        vErrors = [err5];
      } else {
        vErrors.push(err5);
      }
      errors++;
    }
  }
  var _valid0 = _errs6 === errors;
  if (_valid0 && valid0) {
    valid0 = false;
    passing0 = [passing0, 1];
  } else {
    if (_valid0) {
      valid0 = true;
      passing0 = 1;
      if (props0 !== true) {
        props0 = props0 || {};
        props0.reject = true;
      }
    }
  }
  if (!valid0) {
    const err6 = {
      instancePath,
      schemaPath: '#/oneOf',
      keyword: 'oneOf',
      params: { passingSchemas: passing0 },
      message: 'must match exactly one schema in oneOf',
    };
    if (vErrors === null) {
      vErrors = [err6];
    } else {
      vErrors.push(err6);
    }
    errors++;
    validate54.errors = vErrors;
    return false;
  } else {
    errors = _errs0;
    if (vErrors !== null) {
      if (_errs0) {
        vErrors.length = _errs0;
      } else {
        vErrors = null;
      }
    }
  }
  validate54.errors = vErrors;
  evaluated0.props = props0;
  return errors === 0;
}
validate54.evaluated = { dynamicProps: true, dynamicItems: false };
export const validateBeforeEditSiteInput = validate56;
const schema64 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/before-edit-site/input.json',
  title: 'BeforeEditSiteInput',
  type: 'object',
  properties: { value: { $ref: './value.json' }, context: { $ref: './context.json' } },
  required: ['value', 'context'],
};
const schema65 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/before-edit-site/value.json',
  title: 'BeforeEditSiteValue',
  type: 'object',
  properties: {
    name: {
      description: 'The new name. If this field is not set, the name is not being edited.',
      type: 'object',
      properties: { value: { type: 'string' } },
      required: ['value'],
    },
    domain: {
      description: 'The new domain. If this field is not set, the domain is not being edited.',
      type: 'object',
      properties: { value: { type: 'string' } },
      required: ['value'],
    },
    orgId: {
      description:
        'The new ID of the org that will own the site. If this field is not set, the org is not being edited.',
      type: 'object',
      properties: { value: { type: 'string' } },
      required: ['value'],
    },
    customFields: {
      description:
        'The custom fields to edit. If this field is not set or is an empty array, no custom fields are being edited.',
      type: 'array',
      items: { $ref: '../../custom-field/custom-field.json' },
    },
  },
};
function validate57(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/before-edit-site/value.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate57.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  if (errors === 0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      if (data.name !== undefined) {
        let data0 = data.name;
        const _errs1 = errors;
        if (errors === _errs1) {
          if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
            let missing0;
            if (data0.value === undefined && (missing0 = 'value')) {
              validate57.errors = [
                {
                  instancePath: instancePath + '/name',
                  schemaPath: '#/properties/name/required',
                  keyword: 'required',
                  params: { missingProperty: missing0 },
                  message: "must have required property '" + missing0 + "'",
                },
              ];
              return false;
            } else {
              if (data0.value !== undefined) {
                if (typeof data0.value !== 'string') {
                  validate57.errors = [
                    {
                      instancePath: instancePath + '/name/value',
                      schemaPath: '#/properties/name/properties/value/type',
                      keyword: 'type',
                      params: { type: 'string' },
                      message: 'must be string',
                    },
                  ];
                  return false;
                }
              }
            }
          } else {
            validate57.errors = [
              {
                instancePath: instancePath + '/name',
                schemaPath: '#/properties/name/type',
                keyword: 'type',
                params: { type: 'object' },
                message: 'must be object',
              },
            ];
            return false;
          }
        }
        var valid0 = _errs1 === errors;
      } else {
        var valid0 = true;
      }
      if (valid0) {
        if (data.domain !== undefined) {
          let data2 = data.domain;
          const _errs5 = errors;
          if (errors === _errs5) {
            if (data2 && typeof data2 == 'object' && !Array.isArray(data2)) {
              let missing1;
              if (data2.value === undefined && (missing1 = 'value')) {
                validate57.errors = [
                  {
                    instancePath: instancePath + '/domain',
                    schemaPath: '#/properties/domain/required',
                    keyword: 'required',
                    params: { missingProperty: missing1 },
                    message: "must have required property '" + missing1 + "'",
                  },
                ];
                return false;
              } else {
                if (data2.value !== undefined) {
                  if (typeof data2.value !== 'string') {
                    validate57.errors = [
                      {
                        instancePath: instancePath + '/domain/value',
                        schemaPath: '#/properties/domain/properties/value/type',
                        keyword: 'type',
                        params: { type: 'string' },
                        message: 'must be string',
                      },
                    ];
                    return false;
                  }
                }
              }
            } else {
              validate57.errors = [
                {
                  instancePath: instancePath + '/domain',
                  schemaPath: '#/properties/domain/type',
                  keyword: 'type',
                  params: { type: 'object' },
                  message: 'must be object',
                },
              ];
              return false;
            }
          }
          var valid0 = _errs5 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.orgId !== undefined) {
            let data4 = data.orgId;
            const _errs9 = errors;
            if (errors === _errs9) {
              if (data4 && typeof data4 == 'object' && !Array.isArray(data4)) {
                let missing2;
                if (data4.value === undefined && (missing2 = 'value')) {
                  validate57.errors = [
                    {
                      instancePath: instancePath + '/orgId',
                      schemaPath: '#/properties/orgId/required',
                      keyword: 'required',
                      params: { missingProperty: missing2 },
                      message: "must have required property '" + missing2 + "'",
                    },
                  ];
                  return false;
                } else {
                  if (data4.value !== undefined) {
                    if (typeof data4.value !== 'string') {
                      validate57.errors = [
                        {
                          instancePath: instancePath + '/orgId/value',
                          schemaPath: '#/properties/orgId/properties/value/type',
                          keyword: 'type',
                          params: { type: 'string' },
                          message: 'must be string',
                        },
                      ];
                      return false;
                    }
                  }
                }
              } else {
                validate57.errors = [
                  {
                    instancePath: instancePath + '/orgId',
                    schemaPath: '#/properties/orgId/type',
                    keyword: 'type',
                    params: { type: 'object' },
                    message: 'must be object',
                  },
                ];
                return false;
              }
            }
            var valid0 = _errs9 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.customFields !== undefined) {
              let data6 = data.customFields;
              const _errs13 = errors;
              if (errors === _errs13) {
                if (Array.isArray(data6)) {
                  var valid4 = true;
                  const len0 = data6.length;
                  for (let i0 = 0; i0 < len0; i0++) {
                    const _errs15 = errors;
                    if (
                      !validate49(data6[i0], {
                        instancePath: instancePath + '/customFields/' + i0,
                        parentData: data6,
                        parentDataProperty: i0,
                        rootData,
                        dynamicAnchors,
                      })
                    ) {
                      vErrors =
                        vErrors === null ? validate49.errors : vErrors.concat(validate49.errors);
                      errors = vErrors.length;
                    }
                    var valid4 = _errs15 === errors;
                    if (!valid4) {
                      break;
                    }
                  }
                } else {
                  validate57.errors = [
                    {
                      instancePath: instancePath + '/customFields',
                      schemaPath: '#/properties/customFields/type',
                      keyword: 'type',
                      params: { type: 'array' },
                      message: 'must be array',
                    },
                  ];
                  return false;
                }
              }
              var valid0 = _errs13 === errors;
            } else {
              var valid0 = true;
            }
          }
        }
      }
    } else {
      validate57.errors = [
        {
          instancePath,
          schemaPath: '#/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        },
      ];
      return false;
    }
  }
  validate57.errors = vErrors;
  return errors === 0;
}
validate57.evaluated = {
  props: { name: true, domain: true, orgId: true, customFields: true },
  dynamicProps: false,
  dynamicItems: false,
};
const schema66 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/before-edit-site/context.json',
  title: 'BeforeEditSiteContext',
  description: 'The context of the request. Either adminUser or user will be set.',
  $ref: '../../request-context/base-request-context.json',
};
function validate60(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/before-edit-site/context.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate60.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  const _errs0 = errors;
  if (errors === _errs0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      if (data.adminUser !== undefined) {
        let data0 = data.adminUser;
        const _errs2 = errors;
        if (errors === _errs2) {
          if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
            let missing0;
            if (
              (data0.id === undefined && (missing0 = 'id')) ||
              (data0.email === undefined && (missing0 = 'email'))
            ) {
              validate60.errors = [
                {
                  instancePath: instancePath + '/adminUser',
                  schemaPath:
                    '../../request-context/base-request-context.json/properties/adminUser/required',
                  keyword: 'required',
                  params: { missingProperty: missing0 },
                  message: "must have required property '" + missing0 + "'",
                },
              ];
              return false;
            } else {
              if (data0.id !== undefined) {
                const _errs4 = errors;
                if (typeof data0.id !== 'string') {
                  validate60.errors = [
                    {
                      instancePath: instancePath + '/adminUser/id',
                      schemaPath:
                        '../../request-context/base-request-context.json/properties/adminUser/properties/id/type',
                      keyword: 'type',
                      params: { type: 'string' },
                      message: 'must be string',
                    },
                  ];
                  return false;
                }
                var valid2 = _errs4 === errors;
              } else {
                var valid2 = true;
              }
              if (valid2) {
                if (data0.email !== undefined) {
                  const _errs6 = errors;
                  if (typeof data0.email !== 'string') {
                    validate60.errors = [
                      {
                        instancePath: instancePath + '/adminUser/email',
                        schemaPath:
                          '../../request-context/base-request-context.json/properties/adminUser/properties/email/type',
                        keyword: 'type',
                        params: { type: 'string' },
                        message: 'must be string',
                      },
                    ];
                    return false;
                  }
                  var valid2 = _errs6 === errors;
                } else {
                  var valid2 = true;
                }
              }
            }
          } else {
            validate60.errors = [
              {
                instancePath: instancePath + '/adminUser',
                schemaPath:
                  '../../request-context/base-request-context.json/properties/adminUser/type',
                keyword: 'type',
                params: { type: 'object' },
                message: 'must be object',
              },
            ];
            return false;
          }
        }
        var valid1 = _errs2 === errors;
      } else {
        var valid1 = true;
      }
      if (valid1) {
        if (data.user !== undefined) {
          let data3 = data.user;
          const _errs8 = errors;
          if (errors === _errs8) {
            if (data3 && typeof data3 == 'object' && !Array.isArray(data3)) {
              let missing1;
              if (data3.id === undefined && (missing1 = 'id')) {
                validate60.errors = [
                  {
                    instancePath: instancePath + '/user',
                    schemaPath:
                      '../../request-context/base-request-context.json/properties/user/required',
                    keyword: 'required',
                    params: { missingProperty: missing1 },
                    message: "must have required property '" + missing1 + "'",
                  },
                ];
                return false;
              } else {
                if (data3.id !== undefined) {
                  if (typeof data3.id !== 'string') {
                    validate60.errors = [
                      {
                        instancePath: instancePath + '/user/id',
                        schemaPath:
                          '../../request-context/base-request-context.json/properties/user/properties/id/type',
                        keyword: 'type',
                        params: { type: 'string' },
                        message: 'must be string',
                      },
                    ];
                    return false;
                  }
                }
              }
            } else {
              validate60.errors = [
                {
                  instancePath: instancePath + '/user',
                  schemaPath:
                    '../../request-context/base-request-context.json/properties/user/type',
                  keyword: 'type',
                  params: { type: 'object' },
                  message: 'must be object',
                },
              ];
              return false;
            }
          }
          var valid1 = _errs8 === errors;
        } else {
          var valid1 = true;
        }
        if (valid1) {
          if (data.site !== undefined) {
            let data5 = data.site;
            const _errs12 = errors;
            if (errors === _errs12) {
              if (data5 && typeof data5 == 'object' && !Array.isArray(data5)) {
                let missing2;
                if (data5.id === undefined && (missing2 = 'id')) {
                  validate60.errors = [
                    {
                      instancePath: instancePath + '/site',
                      schemaPath:
                        '../../request-context/base-request-context.json/properties/site/required',
                      keyword: 'required',
                      params: { missingProperty: missing2 },
                      message: "must have required property '" + missing2 + "'",
                    },
                  ];
                  return false;
                } else {
                  if (data5.id !== undefined) {
                    if (typeof data5.id !== 'string') {
                      validate60.errors = [
                        {
                          instancePath: instancePath + '/site/id',
                          schemaPath:
                            '../../request-context/base-request-context.json/properties/site/properties/id/type',
                          keyword: 'type',
                          params: { type: 'string' },
                          message: 'must be string',
                        },
                      ];
                      return false;
                    }
                  }
                }
              } else {
                validate60.errors = [
                  {
                    instancePath: instancePath + '/site',
                    schemaPath:
                      '../../request-context/base-request-context.json/properties/site/type',
                    keyword: 'type',
                    params: { type: 'object' },
                    message: 'must be object',
                  },
                ];
                return false;
              }
            }
            var valid1 = _errs12 === errors;
          } else {
            var valid1 = true;
          }
        }
      }
    } else {
      validate60.errors = [
        {
          instancePath,
          schemaPath: '../../request-context/base-request-context.json/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        },
      ];
      return false;
    }
  }
  validate60.errors = vErrors;
  return errors === 0;
}
validate60.evaluated = {
  props: { adminUser: true, user: true, site: true },
  dynamicProps: false,
  dynamicItems: false,
};
function validate56(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/before-edit-site/input.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate56.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  if (errors === 0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (
        (data.value === undefined && (missing0 = 'value')) ||
        (data.context === undefined && (missing0 = 'context'))
      ) {
        validate56.errors = [
          {
            instancePath,
            schemaPath: '#/required',
            keyword: 'required',
            params: { missingProperty: missing0 },
            message: "must have required property '" + missing0 + "'",
          },
        ];
        return false;
      } else {
        if (data.value !== undefined) {
          const _errs1 = errors;
          if (
            !validate57(data.value, {
              instancePath: instancePath + '/value',
              parentData: data,
              parentDataProperty: 'value',
              rootData,
              dynamicAnchors,
            })
          ) {
            vErrors = vErrors === null ? validate57.errors : vErrors.concat(validate57.errors);
            errors = vErrors.length;
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.context !== undefined) {
            const _errs2 = errors;
            if (
              !validate60(data.context, {
                instancePath: instancePath + '/context',
                parentData: data,
                parentDataProperty: 'context',
                rootData,
                dynamicAnchors,
              })
            ) {
              vErrors = vErrors === null ? validate60.errors : vErrors.concat(validate60.errors);
              errors = vErrors.length;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
        }
      }
    } else {
      validate56.errors = [
        {
          instancePath,
          schemaPath: '#/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        },
      ];
      return false;
    }
  }
  validate56.errors = vErrors;
  return errors === 0;
}
validate56.evaluated = {
  props: { value: true, context: true },
  dynamicProps: false,
  dynamicItems: false,
};
export const validateBeforeEditSiteResult = validate62;
const schema68 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/before-edit-site/result.json',
  title: 'BeforeEditSiteResult',
  oneOf: [
    {
      type: 'object',
      properties: {
        value: { $ref: './value.json' },
        stop: {
          description:
            'If true, this is the last handler that will be called for the hook, and the result value will be used as the final result.',
          type: ['boolean', 'null'],
        },
      },
      required: ['value'],
    },
    { $ref: '../../hook-reject-result/hook-reject-result.json' },
  ],
};
function validate62(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/before-edit-site/result.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate62.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  const _errs0 = errors;
  let valid0 = false;
  let passing0 = null;
  const _errs1 = errors;
  if (errors === _errs1) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (data.value === undefined && (missing0 = 'value')) {
        const err0 = {
          instancePath,
          schemaPath: '#/oneOf/0/required',
          keyword: 'required',
          params: { missingProperty: missing0 },
          message: "must have required property '" + missing0 + "'",
        };
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      } else {
        if (data.value !== undefined) {
          const _errs3 = errors;
          if (
            !validate57(data.value, {
              instancePath: instancePath + '/value',
              parentData: data,
              parentDataProperty: 'value',
              rootData,
              dynamicAnchors,
            })
          ) {
            vErrors = vErrors === null ? validate57.errors : vErrors.concat(validate57.errors);
            errors = vErrors.length;
          }
          var valid1 = _errs3 === errors;
        } else {
          var valid1 = true;
        }
        if (valid1) {
          if (data.stop !== undefined) {
            let data1 = data.stop;
            const _errs4 = errors;
            if (typeof data1 !== 'boolean' && data1 !== null) {
              const err1 = {
                instancePath: instancePath + '/stop',
                schemaPath: '#/oneOf/0/properties/stop/type',
                keyword: 'type',
                params: { type: schema68.oneOf[0].properties.stop.type },
                message: 'must be boolean,null',
              };
              if (vErrors === null) {
                vErrors = [err1];
              } else {
                vErrors.push(err1);
              }
              errors++;
            }
            var valid1 = _errs4 === errors;
          } else {
            var valid1 = true;
          }
        }
      }
    } else {
      const err2 = {
        instancePath,
        schemaPath: '#/oneOf/0/type',
        keyword: 'type',
        params: { type: 'object' },
        message: 'must be object',
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
  }
  var _valid0 = _errs1 === errors;
  if (_valid0) {
    valid0 = true;
    passing0 = 0;
    var props0 = {};
    props0.value = true;
    props0.stop = true;
  }
  const _errs6 = errors;
  const _errs7 = errors;
  if (errors === _errs7) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing1;
      if (data.reject === undefined && (missing1 = 'reject')) {
        const err3 = {
          instancePath,
          schemaPath: '../../hook-reject-result/hook-reject-result.json/required',
          keyword: 'required',
          params: { missingProperty: missing1 },
          message: "must have required property '" + missing1 + "'",
        };
        if (vErrors === null) {
          vErrors = [err3];
        } else {
          vErrors.push(err3);
        }
        errors++;
      } else {
        if (data.reject !== undefined) {
          if (typeof data.reject !== 'string') {
            const err4 = {
              instancePath: instancePath + '/reject',
              schemaPath: '../../hook-reject-result/hook-reject-result.json/properties/reject/type',
              keyword: 'type',
              params: { type: 'string' },
              message: 'must be string',
            };
            if (vErrors === null) {
              vErrors = [err4];
            } else {
              vErrors.push(err4);
            }
            errors++;
          }
        }
      }
    } else {
      const err5 = {
        instancePath,
        schemaPath: '../../hook-reject-result/hook-reject-result.json/type',
        keyword: 'type',
        params: { type: 'object' },
        message: 'must be object',
      };
      if (vErrors === null) {
        vErrors = [err5];
      } else {
        vErrors.push(err5);
      }
      errors++;
    }
  }
  var _valid0 = _errs6 === errors;
  if (_valid0 && valid0) {
    valid0 = false;
    passing0 = [passing0, 1];
  } else {
    if (_valid0) {
      valid0 = true;
      passing0 = 1;
      if (props0 !== true) {
        props0 = props0 || {};
        props0.reject = true;
      }
    }
  }
  if (!valid0) {
    const err6 = {
      instancePath,
      schemaPath: '#/oneOf',
      keyword: 'oneOf',
      params: { passingSchemas: passing0 },
      message: 'must match exactly one schema in oneOf',
    };
    if (vErrors === null) {
      vErrors = [err6];
    } else {
      vErrors.push(err6);
    }
    errors++;
    validate62.errors = vErrors;
    return false;
  } else {
    errors = _errs0;
    if (vErrors !== null) {
      if (_errs0) {
        vErrors.length = _errs0;
      } else {
        vErrors = null;
      }
    }
  }
  validate62.errors = vErrors;
  evaluated0.props = props0;
  return errors === 0;
}
validate62.evaluated = { dynamicProps: true, dynamicItems: false };
export const validateBeforeSubmitFormInput = validate64;
const schema70 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/before-submit-form/input.json',
  title: 'BeforeSubmitFormInput',
  type: 'object',
  properties: { value: { $ref: './value.json' }, context: { $ref: './context.json' } },
  required: ['value', 'context'],
};
const schema71 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/before-submit-form/value.json',
  type: 'object',
  title: 'BeforeSubmitFormValue',
  properties: {
    formData: {
      $ref: '../../context-data/context-data.json',
      description: 'The data that was submitted in the form.',
    },
    saveToDatabase: {
      type: 'boolean',
      description:
        'Whether the form submission should be saved to the database. If there are multiple extensions handling this hook, the value of the last hook is used.',
    },
  },
  required: ['formData', 'saveToDatabase'],
};
function validate65(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/before-submit-form/value.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate65.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  if (errors === 0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (
        (data.formData === undefined && (missing0 = 'formData')) ||
        (data.saveToDatabase === undefined && (missing0 = 'saveToDatabase'))
      ) {
        validate65.errors = [
          {
            instancePath,
            schemaPath: '#/required',
            keyword: 'required',
            params: { missingProperty: missing0 },
            message: "must have required property '" + missing0 + "'",
          },
        ];
        return false;
      } else {
        if (data.formData !== undefined) {
          const _errs1 = errors;
          if (
            !validate20(data.formData, {
              instancePath: instancePath + '/formData',
              parentData: data,
              parentDataProperty: 'formData',
              rootData,
              dynamicAnchors,
            })
          ) {
            vErrors = vErrors === null ? validate20.errors : vErrors.concat(validate20.errors);
            errors = vErrors.length;
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.saveToDatabase !== undefined) {
            const _errs2 = errors;
            if (typeof data.saveToDatabase !== 'boolean') {
              validate65.errors = [
                {
                  instancePath: instancePath + '/saveToDatabase',
                  schemaPath: '#/properties/saveToDatabase/type',
                  keyword: 'type',
                  params: { type: 'boolean' },
                  message: 'must be boolean',
                },
              ];
              return false;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
        }
      }
    } else {
      validate65.errors = [
        {
          instancePath,
          schemaPath: '#/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        },
      ];
      return false;
    }
  }
  validate65.errors = vErrors;
  return errors === 0;
}
validate65.evaluated = {
  props: { formData: true, saveToDatabase: true },
  dynamicProps: false,
  dynamicItems: false,
};
const schema72 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/before-submit-form/context.json',
  title: 'BeforeSubmitFormContext',
  allOf: [
    { $ref: '../../request-context/base-request-context.json' },
    {
      type: 'object',
      properties: {
        sessionId: {
          description:
            'The randomly generated ID that identifies the form submission session. It can be used to connect submissions of different steps of the same form.',
          type: 'string',
        },
        stepId: {
          description: 'The ID of the step being submitted, if the form has steps.',
          type: 'string',
        },
        finalStep: {
          description:
            'Whether this is the final step of a multi-step form, or true if the form does not have steps.',
          type: 'boolean',
        },
        submitterIpAddress: {
          description: 'The IP address of the user submitting the form.',
          type: 'string',
        },
        form: {
          description: 'The form being submitted.',
          type: 'object',
          properties: { id: { type: 'string' } },
          required: ['id'],
        },
        pageUrl: {
          description: 'The full URL of the page where the form is being shown.',
          type: 'string',
        },
      },
      required: ['sessionId', 'finalStep', 'form', 'pageUrl'],
    },
  ],
};
function validate68(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/before-submit-form/context.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate68.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  const _errs0 = errors;
  const _errs1 = errors;
  if (errors === _errs1) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      if (data.adminUser !== undefined) {
        let data0 = data.adminUser;
        const _errs3 = errors;
        if (errors === _errs3) {
          if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
            let missing0;
            if (
              (data0.id === undefined && (missing0 = 'id')) ||
              (data0.email === undefined && (missing0 = 'email'))
            ) {
              validate68.errors = [
                {
                  instancePath: instancePath + '/adminUser',
                  schemaPath:
                    '../../request-context/base-request-context.json/properties/adminUser/required',
                  keyword: 'required',
                  params: { missingProperty: missing0 },
                  message: "must have required property '" + missing0 + "'",
                },
              ];
              return false;
            } else {
              if (data0.id !== undefined) {
                const _errs5 = errors;
                if (typeof data0.id !== 'string') {
                  validate68.errors = [
                    {
                      instancePath: instancePath + '/adminUser/id',
                      schemaPath:
                        '../../request-context/base-request-context.json/properties/adminUser/properties/id/type',
                      keyword: 'type',
                      params: { type: 'string' },
                      message: 'must be string',
                    },
                  ];
                  return false;
                }
                var valid3 = _errs5 === errors;
              } else {
                var valid3 = true;
              }
              if (valid3) {
                if (data0.email !== undefined) {
                  const _errs7 = errors;
                  if (typeof data0.email !== 'string') {
                    validate68.errors = [
                      {
                        instancePath: instancePath + '/adminUser/email',
                        schemaPath:
                          '../../request-context/base-request-context.json/properties/adminUser/properties/email/type',
                        keyword: 'type',
                        params: { type: 'string' },
                        message: 'must be string',
                      },
                    ];
                    return false;
                  }
                  var valid3 = _errs7 === errors;
                } else {
                  var valid3 = true;
                }
              }
            }
          } else {
            validate68.errors = [
              {
                instancePath: instancePath + '/adminUser',
                schemaPath:
                  '../../request-context/base-request-context.json/properties/adminUser/type',
                keyword: 'type',
                params: { type: 'object' },
                message: 'must be object',
              },
            ];
            return false;
          }
        }
        var valid2 = _errs3 === errors;
      } else {
        var valid2 = true;
      }
      if (valid2) {
        if (data.user !== undefined) {
          let data3 = data.user;
          const _errs9 = errors;
          if (errors === _errs9) {
            if (data3 && typeof data3 == 'object' && !Array.isArray(data3)) {
              let missing1;
              if (data3.id === undefined && (missing1 = 'id')) {
                validate68.errors = [
                  {
                    instancePath: instancePath + '/user',
                    schemaPath:
                      '../../request-context/base-request-context.json/properties/user/required',
                    keyword: 'required',
                    params: { missingProperty: missing1 },
                    message: "must have required property '" + missing1 + "'",
                  },
                ];
                return false;
              } else {
                if (data3.id !== undefined) {
                  if (typeof data3.id !== 'string') {
                    validate68.errors = [
                      {
                        instancePath: instancePath + '/user/id',
                        schemaPath:
                          '../../request-context/base-request-context.json/properties/user/properties/id/type',
                        keyword: 'type',
                        params: { type: 'string' },
                        message: 'must be string',
                      },
                    ];
                    return false;
                  }
                }
              }
            } else {
              validate68.errors = [
                {
                  instancePath: instancePath + '/user',
                  schemaPath:
                    '../../request-context/base-request-context.json/properties/user/type',
                  keyword: 'type',
                  params: { type: 'object' },
                  message: 'must be object',
                },
              ];
              return false;
            }
          }
          var valid2 = _errs9 === errors;
        } else {
          var valid2 = true;
        }
        if (valid2) {
          if (data.site !== undefined) {
            let data5 = data.site;
            const _errs13 = errors;
            if (errors === _errs13) {
              if (data5 && typeof data5 == 'object' && !Array.isArray(data5)) {
                let missing2;
                if (data5.id === undefined && (missing2 = 'id')) {
                  validate68.errors = [
                    {
                      instancePath: instancePath + '/site',
                      schemaPath:
                        '../../request-context/base-request-context.json/properties/site/required',
                      keyword: 'required',
                      params: { missingProperty: missing2 },
                      message: "must have required property '" + missing2 + "'",
                    },
                  ];
                  return false;
                } else {
                  if (data5.id !== undefined) {
                    if (typeof data5.id !== 'string') {
                      validate68.errors = [
                        {
                          instancePath: instancePath + '/site/id',
                          schemaPath:
                            '../../request-context/base-request-context.json/properties/site/properties/id/type',
                          keyword: 'type',
                          params: { type: 'string' },
                          message: 'must be string',
                        },
                      ];
                      return false;
                    }
                  }
                }
              } else {
                validate68.errors = [
                  {
                    instancePath: instancePath + '/site',
                    schemaPath:
                      '../../request-context/base-request-context.json/properties/site/type',
                    keyword: 'type',
                    params: { type: 'object' },
                    message: 'must be object',
                  },
                ];
                return false;
              }
            }
            var valid2 = _errs13 === errors;
          } else {
            var valid2 = true;
          }
        }
      }
    } else {
      validate68.errors = [
        {
          instancePath,
          schemaPath: '../../request-context/base-request-context.json/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        },
      ];
      return false;
    }
  }
  var valid0 = _errs0 === errors;
  if (valid0) {
    const _errs17 = errors;
    if (errors === _errs17) {
      if (data && typeof data == 'object' && !Array.isArray(data)) {
        let missing3;
        if (
          (data.sessionId === undefined && (missing3 = 'sessionId')) ||
          (data.finalStep === undefined && (missing3 = 'finalStep')) ||
          (data.form === undefined && (missing3 = 'form')) ||
          (data.pageUrl === undefined && (missing3 = 'pageUrl'))
        ) {
          validate68.errors = [
            {
              instancePath,
              schemaPath: '#/allOf/1/required',
              keyword: 'required',
              params: { missingProperty: missing3 },
              message: "must have required property '" + missing3 + "'",
            },
          ];
          return false;
        } else {
          if (data.sessionId !== undefined) {
            const _errs19 = errors;
            if (typeof data.sessionId !== 'string') {
              validate68.errors = [
                {
                  instancePath: instancePath + '/sessionId',
                  schemaPath: '#/allOf/1/properties/sessionId/type',
                  keyword: 'type',
                  params: { type: 'string' },
                  message: 'must be string',
                },
              ];
              return false;
            }
            var valid6 = _errs19 === errors;
          } else {
            var valid6 = true;
          }
          if (valid6) {
            if (data.stepId !== undefined) {
              const _errs21 = errors;
              if (typeof data.stepId !== 'string') {
                validate68.errors = [
                  {
                    instancePath: instancePath + '/stepId',
                    schemaPath: '#/allOf/1/properties/stepId/type',
                    keyword: 'type',
                    params: { type: 'string' },
                    message: 'must be string',
                  },
                ];
                return false;
              }
              var valid6 = _errs21 === errors;
            } else {
              var valid6 = true;
            }
            if (valid6) {
              if (data.finalStep !== undefined) {
                const _errs23 = errors;
                if (typeof data.finalStep !== 'boolean') {
                  validate68.errors = [
                    {
                      instancePath: instancePath + '/finalStep',
                      schemaPath: '#/allOf/1/properties/finalStep/type',
                      keyword: 'type',
                      params: { type: 'boolean' },
                      message: 'must be boolean',
                    },
                  ];
                  return false;
                }
                var valid6 = _errs23 === errors;
              } else {
                var valid6 = true;
              }
              if (valid6) {
                if (data.submitterIpAddress !== undefined) {
                  const _errs25 = errors;
                  if (typeof data.submitterIpAddress !== 'string') {
                    validate68.errors = [
                      {
                        instancePath: instancePath + '/submitterIpAddress',
                        schemaPath: '#/allOf/1/properties/submitterIpAddress/type',
                        keyword: 'type',
                        params: { type: 'string' },
                        message: 'must be string',
                      },
                    ];
                    return false;
                  }
                  var valid6 = _errs25 === errors;
                } else {
                  var valid6 = true;
                }
                if (valid6) {
                  if (data.form !== undefined) {
                    let data11 = data.form;
                    const _errs27 = errors;
                    if (errors === _errs27) {
                      if (data11 && typeof data11 == 'object' && !Array.isArray(data11)) {
                        let missing4;
                        if (data11.id === undefined && (missing4 = 'id')) {
                          validate68.errors = [
                            {
                              instancePath: instancePath + '/form',
                              schemaPath: '#/allOf/1/properties/form/required',
                              keyword: 'required',
                              params: { missingProperty: missing4 },
                              message: "must have required property '" + missing4 + "'",
                            },
                          ];
                          return false;
                        } else {
                          if (data11.id !== undefined) {
                            if (typeof data11.id !== 'string') {
                              validate68.errors = [
                                {
                                  instancePath: instancePath + '/form/id',
                                  schemaPath: '#/allOf/1/properties/form/properties/id/type',
                                  keyword: 'type',
                                  params: { type: 'string' },
                                  message: 'must be string',
                                },
                              ];
                              return false;
                            }
                          }
                        }
                      } else {
                        validate68.errors = [
                          {
                            instancePath: instancePath + '/form',
                            schemaPath: '#/allOf/1/properties/form/type',
                            keyword: 'type',
                            params: { type: 'object' },
                            message: 'must be object',
                          },
                        ];
                        return false;
                      }
                    }
                    var valid6 = _errs27 === errors;
                  } else {
                    var valid6 = true;
                  }
                  if (valid6) {
                    if (data.pageUrl !== undefined) {
                      const _errs31 = errors;
                      if (typeof data.pageUrl !== 'string') {
                        validate68.errors = [
                          {
                            instancePath: instancePath + '/pageUrl',
                            schemaPath: '#/allOf/1/properties/pageUrl/type',
                            keyword: 'type',
                            params: { type: 'string' },
                            message: 'must be string',
                          },
                        ];
                        return false;
                      }
                      var valid6 = _errs31 === errors;
                    } else {
                      var valid6 = true;
                    }
                  }
                }
              }
            }
          }
        }
      } else {
        validate68.errors = [
          {
            instancePath,
            schemaPath: '#/allOf/1/type',
            keyword: 'type',
            params: { type: 'object' },
            message: 'must be object',
          },
        ];
        return false;
      }
    }
    var valid0 = _errs17 === errors;
  }
  validate68.errors = vErrors;
  return errors === 0;
}
validate68.evaluated = {
  props: {
    sessionId: true,
    stepId: true,
    finalStep: true,
    submitterIpAddress: true,
    form: true,
    pageUrl: true,
    adminUser: true,
    user: true,
    site: true,
  },
  dynamicProps: false,
  dynamicItems: false,
};
function validate64(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/before-submit-form/input.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate64.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  if (errors === 0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (
        (data.value === undefined && (missing0 = 'value')) ||
        (data.context === undefined && (missing0 = 'context'))
      ) {
        validate64.errors = [
          {
            instancePath,
            schemaPath: '#/required',
            keyword: 'required',
            params: { missingProperty: missing0 },
            message: "must have required property '" + missing0 + "'",
          },
        ];
        return false;
      } else {
        if (data.value !== undefined) {
          const _errs1 = errors;
          if (
            !validate65(data.value, {
              instancePath: instancePath + '/value',
              parentData: data,
              parentDataProperty: 'value',
              rootData,
              dynamicAnchors,
            })
          ) {
            vErrors = vErrors === null ? validate65.errors : vErrors.concat(validate65.errors);
            errors = vErrors.length;
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.context !== undefined) {
            const _errs2 = errors;
            if (
              !validate68(data.context, {
                instancePath: instancePath + '/context',
                parentData: data,
                parentDataProperty: 'context',
                rootData,
                dynamicAnchors,
              })
            ) {
              vErrors = vErrors === null ? validate68.errors : vErrors.concat(validate68.errors);
              errors = vErrors.length;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
        }
      }
    } else {
      validate64.errors = [
        {
          instancePath,
          schemaPath: '#/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        },
      ];
      return false;
    }
  }
  validate64.errors = vErrors;
  return errors === 0;
}
validate64.evaluated = {
  props: { value: true, context: true },
  dynamicProps: false,
  dynamicItems: false,
};
export const validateBeforeSubmitFormResult = validate70;
const schema74 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/before-submit-form/result.json',
  title: 'BeforeSubmitFormResult',
  oneOf: [
    {
      type: 'object',
      properties: {
        value: { $ref: './value.json' },
        stop: {
          description:
            'If true, this is the last handler that will be called for the hook, and the result value will be used as the final result.',
          type: ['boolean', 'null'],
        },
      },
      required: ['value'],
    },
    { $ref: '../../hook-reject-result/hook-reject-result.json' },
  ],
};
function validate70(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/before-submit-form/result.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate70.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  const _errs0 = errors;
  let valid0 = false;
  let passing0 = null;
  const _errs1 = errors;
  if (errors === _errs1) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (data.value === undefined && (missing0 = 'value')) {
        const err0 = {
          instancePath,
          schemaPath: '#/oneOf/0/required',
          keyword: 'required',
          params: { missingProperty: missing0 },
          message: "must have required property '" + missing0 + "'",
        };
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      } else {
        if (data.value !== undefined) {
          const _errs3 = errors;
          if (
            !validate65(data.value, {
              instancePath: instancePath + '/value',
              parentData: data,
              parentDataProperty: 'value',
              rootData,
              dynamicAnchors,
            })
          ) {
            vErrors = vErrors === null ? validate65.errors : vErrors.concat(validate65.errors);
            errors = vErrors.length;
          }
          var valid1 = _errs3 === errors;
        } else {
          var valid1 = true;
        }
        if (valid1) {
          if (data.stop !== undefined) {
            let data1 = data.stop;
            const _errs4 = errors;
            if (typeof data1 !== 'boolean' && data1 !== null) {
              const err1 = {
                instancePath: instancePath + '/stop',
                schemaPath: '#/oneOf/0/properties/stop/type',
                keyword: 'type',
                params: { type: schema74.oneOf[0].properties.stop.type },
                message: 'must be boolean,null',
              };
              if (vErrors === null) {
                vErrors = [err1];
              } else {
                vErrors.push(err1);
              }
              errors++;
            }
            var valid1 = _errs4 === errors;
          } else {
            var valid1 = true;
          }
        }
      }
    } else {
      const err2 = {
        instancePath,
        schemaPath: '#/oneOf/0/type',
        keyword: 'type',
        params: { type: 'object' },
        message: 'must be object',
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
  }
  var _valid0 = _errs1 === errors;
  if (_valid0) {
    valid0 = true;
    passing0 = 0;
    var props0 = {};
    props0.value = true;
    props0.stop = true;
  }
  const _errs6 = errors;
  const _errs7 = errors;
  if (errors === _errs7) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing1;
      if (data.reject === undefined && (missing1 = 'reject')) {
        const err3 = {
          instancePath,
          schemaPath: '../../hook-reject-result/hook-reject-result.json/required',
          keyword: 'required',
          params: { missingProperty: missing1 },
          message: "must have required property '" + missing1 + "'",
        };
        if (vErrors === null) {
          vErrors = [err3];
        } else {
          vErrors.push(err3);
        }
        errors++;
      } else {
        if (data.reject !== undefined) {
          if (typeof data.reject !== 'string') {
            const err4 = {
              instancePath: instancePath + '/reject',
              schemaPath: '../../hook-reject-result/hook-reject-result.json/properties/reject/type',
              keyword: 'type',
              params: { type: 'string' },
              message: 'must be string',
            };
            if (vErrors === null) {
              vErrors = [err4];
            } else {
              vErrors.push(err4);
            }
            errors++;
          }
        }
      }
    } else {
      const err5 = {
        instancePath,
        schemaPath: '../../hook-reject-result/hook-reject-result.json/type',
        keyword: 'type',
        params: { type: 'object' },
        message: 'must be object',
      };
      if (vErrors === null) {
        vErrors = [err5];
      } else {
        vErrors.push(err5);
      }
      errors++;
    }
  }
  var _valid0 = _errs6 === errors;
  if (_valid0 && valid0) {
    valid0 = false;
    passing0 = [passing0, 1];
  } else {
    if (_valid0) {
      valid0 = true;
      passing0 = 1;
      if (props0 !== true) {
        props0 = props0 || {};
        props0.reject = true;
      }
    }
  }
  if (!valid0) {
    const err6 = {
      instancePath,
      schemaPath: '#/oneOf',
      keyword: 'oneOf',
      params: { passingSchemas: passing0 },
      message: 'must match exactly one schema in oneOf',
    };
    if (vErrors === null) {
      vErrors = [err6];
    } else {
      vErrors.push(err6);
    }
    errors++;
    validate70.errors = vErrors;
    return false;
  } else {
    errors = _errs0;
    if (vErrors !== null) {
      if (_errs0) {
        vErrors.length = _errs0;
      } else {
        vErrors = null;
      }
    }
  }
  validate70.errors = vErrors;
  evaluated0.props = props0;
  return errors === 0;
}
validate70.evaluated = { dynamicProps: true, dynamicItems: false };
export const validateInitialFormDataInput = validate72;
const schema76 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/initial-form-data/input.json',
  title: 'InitialFormDataInput',
  type: 'object',
  properties: { value: { $ref: './value.json' }, context: { $ref: './context.json' } },
  required: ['value', 'context'],
};
const schema77 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/initial-form-data/value.json',
  title: 'InitialFormDataValue',
  type: 'object',
  properties: {
    formData: {
      $ref: '../../context-data/context-data.json',
      description: 'The initial data for the form.',
    },
  },
  required: ['formData'],
};
function validate73(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/initial-form-data/value.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate73.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  if (errors === 0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (data.formData === undefined && (missing0 = 'formData')) {
        validate73.errors = [
          {
            instancePath,
            schemaPath: '#/required',
            keyword: 'required',
            params: { missingProperty: missing0 },
            message: "must have required property '" + missing0 + "'",
          },
        ];
        return false;
      } else {
        if (data.formData !== undefined) {
          if (
            !validate20(data.formData, {
              instancePath: instancePath + '/formData',
              parentData: data,
              parentDataProperty: 'formData',
              rootData,
              dynamicAnchors,
            })
          ) {
            vErrors = vErrors === null ? validate20.errors : vErrors.concat(validate20.errors);
            errors = vErrors.length;
          }
        }
      }
    } else {
      validate73.errors = [
        {
          instancePath,
          schemaPath: '#/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        },
      ];
      return false;
    }
  }
  validate73.errors = vErrors;
  return errors === 0;
}
validate73.evaluated = { props: { formData: true }, dynamicProps: false, dynamicItems: false };
const schema78 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/initial-form-data/context.json',
  title: 'InitialFormDataContext',
  allOf: [
    { $ref: '../../request-context/base-request-context.json' },
    {
      type: 'object',
      properties: {
        form: { type: 'object', properties: { id: { type: 'string' } }, required: ['id'] },
        pageUrl: {
          description: 'The full URL of the page where the form is being shown.',
          type: 'string',
        },
      },
      required: ['form', 'pageUrl'],
    },
  ],
};
function validate76(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/initial-form-data/context.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate76.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  const _errs0 = errors;
  const _errs1 = errors;
  if (errors === _errs1) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      if (data.adminUser !== undefined) {
        let data0 = data.adminUser;
        const _errs3 = errors;
        if (errors === _errs3) {
          if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
            let missing0;
            if (
              (data0.id === undefined && (missing0 = 'id')) ||
              (data0.email === undefined && (missing0 = 'email'))
            ) {
              validate76.errors = [
                {
                  instancePath: instancePath + '/adminUser',
                  schemaPath:
                    '../../request-context/base-request-context.json/properties/adminUser/required',
                  keyword: 'required',
                  params: { missingProperty: missing0 },
                  message: "must have required property '" + missing0 + "'",
                },
              ];
              return false;
            } else {
              if (data0.id !== undefined) {
                const _errs5 = errors;
                if (typeof data0.id !== 'string') {
                  validate76.errors = [
                    {
                      instancePath: instancePath + '/adminUser/id',
                      schemaPath:
                        '../../request-context/base-request-context.json/properties/adminUser/properties/id/type',
                      keyword: 'type',
                      params: { type: 'string' },
                      message: 'must be string',
                    },
                  ];
                  return false;
                }
                var valid3 = _errs5 === errors;
              } else {
                var valid3 = true;
              }
              if (valid3) {
                if (data0.email !== undefined) {
                  const _errs7 = errors;
                  if (typeof data0.email !== 'string') {
                    validate76.errors = [
                      {
                        instancePath: instancePath + '/adminUser/email',
                        schemaPath:
                          '../../request-context/base-request-context.json/properties/adminUser/properties/email/type',
                        keyword: 'type',
                        params: { type: 'string' },
                        message: 'must be string',
                      },
                    ];
                    return false;
                  }
                  var valid3 = _errs7 === errors;
                } else {
                  var valid3 = true;
                }
              }
            }
          } else {
            validate76.errors = [
              {
                instancePath: instancePath + '/adminUser',
                schemaPath:
                  '../../request-context/base-request-context.json/properties/adminUser/type',
                keyword: 'type',
                params: { type: 'object' },
                message: 'must be object',
              },
            ];
            return false;
          }
        }
        var valid2 = _errs3 === errors;
      } else {
        var valid2 = true;
      }
      if (valid2) {
        if (data.user !== undefined) {
          let data3 = data.user;
          const _errs9 = errors;
          if (errors === _errs9) {
            if (data3 && typeof data3 == 'object' && !Array.isArray(data3)) {
              let missing1;
              if (data3.id === undefined && (missing1 = 'id')) {
                validate76.errors = [
                  {
                    instancePath: instancePath + '/user',
                    schemaPath:
                      '../../request-context/base-request-context.json/properties/user/required',
                    keyword: 'required',
                    params: { missingProperty: missing1 },
                    message: "must have required property '" + missing1 + "'",
                  },
                ];
                return false;
              } else {
                if (data3.id !== undefined) {
                  if (typeof data3.id !== 'string') {
                    validate76.errors = [
                      {
                        instancePath: instancePath + '/user/id',
                        schemaPath:
                          '../../request-context/base-request-context.json/properties/user/properties/id/type',
                        keyword: 'type',
                        params: { type: 'string' },
                        message: 'must be string',
                      },
                    ];
                    return false;
                  }
                }
              }
            } else {
              validate76.errors = [
                {
                  instancePath: instancePath + '/user',
                  schemaPath:
                    '../../request-context/base-request-context.json/properties/user/type',
                  keyword: 'type',
                  params: { type: 'object' },
                  message: 'must be object',
                },
              ];
              return false;
            }
          }
          var valid2 = _errs9 === errors;
        } else {
          var valid2 = true;
        }
        if (valid2) {
          if (data.site !== undefined) {
            let data5 = data.site;
            const _errs13 = errors;
            if (errors === _errs13) {
              if (data5 && typeof data5 == 'object' && !Array.isArray(data5)) {
                let missing2;
                if (data5.id === undefined && (missing2 = 'id')) {
                  validate76.errors = [
                    {
                      instancePath: instancePath + '/site',
                      schemaPath:
                        '../../request-context/base-request-context.json/properties/site/required',
                      keyword: 'required',
                      params: { missingProperty: missing2 },
                      message: "must have required property '" + missing2 + "'",
                    },
                  ];
                  return false;
                } else {
                  if (data5.id !== undefined) {
                    if (typeof data5.id !== 'string') {
                      validate76.errors = [
                        {
                          instancePath: instancePath + '/site/id',
                          schemaPath:
                            '../../request-context/base-request-context.json/properties/site/properties/id/type',
                          keyword: 'type',
                          params: { type: 'string' },
                          message: 'must be string',
                        },
                      ];
                      return false;
                    }
                  }
                }
              } else {
                validate76.errors = [
                  {
                    instancePath: instancePath + '/site',
                    schemaPath:
                      '../../request-context/base-request-context.json/properties/site/type',
                    keyword: 'type',
                    params: { type: 'object' },
                    message: 'must be object',
                  },
                ];
                return false;
              }
            }
            var valid2 = _errs13 === errors;
          } else {
            var valid2 = true;
          }
        }
      }
    } else {
      validate76.errors = [
        {
          instancePath,
          schemaPath: '../../request-context/base-request-context.json/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        },
      ];
      return false;
    }
  }
  var valid0 = _errs0 === errors;
  if (valid0) {
    const _errs17 = errors;
    if (errors === _errs17) {
      if (data && typeof data == 'object' && !Array.isArray(data)) {
        let missing3;
        if (
          (data.form === undefined && (missing3 = 'form')) ||
          (data.pageUrl === undefined && (missing3 = 'pageUrl'))
        ) {
          validate76.errors = [
            {
              instancePath,
              schemaPath: '#/allOf/1/required',
              keyword: 'required',
              params: { missingProperty: missing3 },
              message: "must have required property '" + missing3 + "'",
            },
          ];
          return false;
        } else {
          if (data.form !== undefined) {
            let data7 = data.form;
            const _errs19 = errors;
            if (errors === _errs19) {
              if (data7 && typeof data7 == 'object' && !Array.isArray(data7)) {
                let missing4;
                if (data7.id === undefined && (missing4 = 'id')) {
                  validate76.errors = [
                    {
                      instancePath: instancePath + '/form',
                      schemaPath: '#/allOf/1/properties/form/required',
                      keyword: 'required',
                      params: { missingProperty: missing4 },
                      message: "must have required property '" + missing4 + "'",
                    },
                  ];
                  return false;
                } else {
                  if (data7.id !== undefined) {
                    if (typeof data7.id !== 'string') {
                      validate76.errors = [
                        {
                          instancePath: instancePath + '/form/id',
                          schemaPath: '#/allOf/1/properties/form/properties/id/type',
                          keyword: 'type',
                          params: { type: 'string' },
                          message: 'must be string',
                        },
                      ];
                      return false;
                    }
                  }
                }
              } else {
                validate76.errors = [
                  {
                    instancePath: instancePath + '/form',
                    schemaPath: '#/allOf/1/properties/form/type',
                    keyword: 'type',
                    params: { type: 'object' },
                    message: 'must be object',
                  },
                ];
                return false;
              }
            }
            var valid6 = _errs19 === errors;
          } else {
            var valid6 = true;
          }
          if (valid6) {
            if (data.pageUrl !== undefined) {
              const _errs23 = errors;
              if (typeof data.pageUrl !== 'string') {
                validate76.errors = [
                  {
                    instancePath: instancePath + '/pageUrl',
                    schemaPath: '#/allOf/1/properties/pageUrl/type',
                    keyword: 'type',
                    params: { type: 'string' },
                    message: 'must be string',
                  },
                ];
                return false;
              }
              var valid6 = _errs23 === errors;
            } else {
              var valid6 = true;
            }
          }
        }
      } else {
        validate76.errors = [
          {
            instancePath,
            schemaPath: '#/allOf/1/type',
            keyword: 'type',
            params: { type: 'object' },
            message: 'must be object',
          },
        ];
        return false;
      }
    }
    var valid0 = _errs17 === errors;
  }
  validate76.errors = vErrors;
  return errors === 0;
}
validate76.evaluated = {
  props: { form: true, pageUrl: true, adminUser: true, user: true, site: true },
  dynamicProps: false,
  dynamicItems: false,
};
function validate72(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/initial-form-data/input.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate72.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  if (errors === 0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (
        (data.value === undefined && (missing0 = 'value')) ||
        (data.context === undefined && (missing0 = 'context'))
      ) {
        validate72.errors = [
          {
            instancePath,
            schemaPath: '#/required',
            keyword: 'required',
            params: { missingProperty: missing0 },
            message: "must have required property '" + missing0 + "'",
          },
        ];
        return false;
      } else {
        if (data.value !== undefined) {
          const _errs1 = errors;
          if (
            !validate73(data.value, {
              instancePath: instancePath + '/value',
              parentData: data,
              parentDataProperty: 'value',
              rootData,
              dynamicAnchors,
            })
          ) {
            vErrors = vErrors === null ? validate73.errors : vErrors.concat(validate73.errors);
            errors = vErrors.length;
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.context !== undefined) {
            const _errs2 = errors;
            if (
              !validate76(data.context, {
                instancePath: instancePath + '/context',
                parentData: data,
                parentDataProperty: 'context',
                rootData,
                dynamicAnchors,
              })
            ) {
              vErrors = vErrors === null ? validate76.errors : vErrors.concat(validate76.errors);
              errors = vErrors.length;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
        }
      }
    } else {
      validate72.errors = [
        {
          instancePath,
          schemaPath: '#/type',
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object',
        },
      ];
      return false;
    }
  }
  validate72.errors = vErrors;
  return errors === 0;
}
validate72.evaluated = {
  props: { value: true, context: true },
  dynamicProps: false,
  dynamicItems: false,
};
export const validateInitialFormDataResult = validate78;
const schema80 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/initial-form-data/result.json',
  title: 'InitialFormDataResult',
  oneOf: [
    {
      type: 'object',
      properties: {
        value: { $ref: './value.json' },
        stop: {
          description:
            'If true, this is the last handler that will be called for the hook, and the result value will be used as the final result.',
          type: ['boolean', 'null'],
        },
      },
      required: ['value'],
    },
    { $ref: '../../hook-reject-result/hook-reject-result.json' },
  ],
};
function validate78(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/initial-form-data/result.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate78.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  const _errs0 = errors;
  let valid0 = false;
  let passing0 = null;
  const _errs1 = errors;
  if (errors === _errs1) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (data.value === undefined && (missing0 = 'value')) {
        const err0 = {
          instancePath,
          schemaPath: '#/oneOf/0/required',
          keyword: 'required',
          params: { missingProperty: missing0 },
          message: "must have required property '" + missing0 + "'",
        };
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      } else {
        if (data.value !== undefined) {
          const _errs3 = errors;
          if (
            !validate73(data.value, {
              instancePath: instancePath + '/value',
              parentData: data,
              parentDataProperty: 'value',
              rootData,
              dynamicAnchors,
            })
          ) {
            vErrors = vErrors === null ? validate73.errors : vErrors.concat(validate73.errors);
            errors = vErrors.length;
          }
          var valid1 = _errs3 === errors;
        } else {
          var valid1 = true;
        }
        if (valid1) {
          if (data.stop !== undefined) {
            let data1 = data.stop;
            const _errs4 = errors;
            if (typeof data1 !== 'boolean' && data1 !== null) {
              const err1 = {
                instancePath: instancePath + '/stop',
                schemaPath: '#/oneOf/0/properties/stop/type',
                keyword: 'type',
                params: { type: schema80.oneOf[0].properties.stop.type },
                message: 'must be boolean,null',
              };
              if (vErrors === null) {
                vErrors = [err1];
              } else {
                vErrors.push(err1);
              }
              errors++;
            }
            var valid1 = _errs4 === errors;
          } else {
            var valid1 = true;
          }
        }
      }
    } else {
      const err2 = {
        instancePath,
        schemaPath: '#/oneOf/0/type',
        keyword: 'type',
        params: { type: 'object' },
        message: 'must be object',
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
  }
  var _valid0 = _errs1 === errors;
  if (_valid0) {
    valid0 = true;
    passing0 = 0;
    var props0 = {};
    props0.value = true;
    props0.stop = true;
  }
  const _errs6 = errors;
  const _errs7 = errors;
  if (errors === _errs7) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing1;
      if (data.reject === undefined && (missing1 = 'reject')) {
        const err3 = {
          instancePath,
          schemaPath: '../../hook-reject-result/hook-reject-result.json/required',
          keyword: 'required',
          params: { missingProperty: missing1 },
          message: "must have required property '" + missing1 + "'",
        };
        if (vErrors === null) {
          vErrors = [err3];
        } else {
          vErrors.push(err3);
        }
        errors++;
      } else {
        if (data.reject !== undefined) {
          if (typeof data.reject !== 'string') {
            const err4 = {
              instancePath: instancePath + '/reject',
              schemaPath: '../../hook-reject-result/hook-reject-result.json/properties/reject/type',
              keyword: 'type',
              params: { type: 'string' },
              message: 'must be string',
            };
            if (vErrors === null) {
              vErrors = [err4];
            } else {
              vErrors.push(err4);
            }
            errors++;
          }
        }
      }
    } else {
      const err5 = {
        instancePath,
        schemaPath: '../../hook-reject-result/hook-reject-result.json/type',
        keyword: 'type',
        params: { type: 'object' },
        message: 'must be object',
      };
      if (vErrors === null) {
        vErrors = [err5];
      } else {
        vErrors.push(err5);
      }
      errors++;
    }
  }
  var _valid0 = _errs6 === errors;
  if (_valid0 && valid0) {
    valid0 = false;
    passing0 = [passing0, 1];
  } else {
    if (_valid0) {
      valid0 = true;
      passing0 = 1;
      if (props0 !== true) {
        props0 = props0 || {};
        props0.reject = true;
      }
    }
  }
  if (!valid0) {
    const err6 = {
      instancePath,
      schemaPath: '#/oneOf',
      keyword: 'oneOf',
      params: { passingSchemas: passing0 },
      message: 'must match exactly one schema in oneOf',
    };
    if (vErrors === null) {
      vErrors = [err6];
    } else {
      vErrors.push(err6);
    }
    errors++;
    validate78.errors = vErrors;
    return false;
  } else {
    errors = _errs0;
    if (vErrors !== null) {
      if (_errs0) {
        vErrors.length = _errs0;
      } else {
        vErrors = null;
      }
    }
  }
  validate78.errors = vErrors;
  evaluated0.props = props0;
  return errors === 0;
}
validate78.evaluated = { dynamicProps: true, dynamicItems: false };
