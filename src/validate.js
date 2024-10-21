'use strict';
export const validateAuthorizeHookResult = validate20;
const schema31 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/authorize-hook-result/authorize-hook-result.json',
  title: 'AuthorizeHookResult',
  oneOf: [
    { type: 'object', properties: { ok: { const: true } }, required: ['ok'] },
    {
      type: 'object',
      properties: { ok: { const: false }, message: { type: 'string' } },
      required: ['ok', 'message'],
    },
  ],
};
function validate20(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/authorize-hook-result/authorize-hook-result.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate20.evaluated;
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
      if (data.ok === undefined && (missing0 = 'ok')) {
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
        if (data.ok !== undefined) {
          if (true !== data.ok) {
            const err1 = {
              instancePath: instancePath + '/ok',
              schemaPath: '#/oneOf/0/properties/ok/const',
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
    props0.ok = true;
  }
  const _errs4 = errors;
  if (errors === _errs4) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing1;
      if (
        (data.ok === undefined && (missing1 = 'ok')) ||
        (data.message === undefined && (missing1 = 'message'))
      ) {
        const err3 = {
          instancePath,
          schemaPath: '#/oneOf/1/required',
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
          const _errs6 = errors;
          if (false !== data.ok) {
            const err4 = {
              instancePath: instancePath + '/ok',
              schemaPath: '#/oneOf/1/properties/ok/const',
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
          var valid2 = _errs6 === errors;
        } else {
          var valid2 = true;
        }
        if (valid2) {
          if (data.message !== undefined) {
            const _errs7 = errors;
            if (typeof data.message !== 'string') {
              const err5 = {
                instancePath: instancePath + '/message',
                schemaPath: '#/oneOf/1/properties/message/type',
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
            var valid2 = _errs7 === errors;
          } else {
            var valid2 = true;
          }
        }
      }
    } else {
      const err6 = {
        instancePath,
        schemaPath: '#/oneOf/1/type',
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
  var _valid0 = _errs4 === errors;
  if (_valid0 && valid0) {
    valid0 = false;
    passing0 = [passing0, 1];
  } else {
    if (_valid0) {
      valid0 = true;
      passing0 = 1;
      if (props0 !== true) {
        props0 = props0 || {};
        props0.ok = true;
        props0.message = true;
      }
    }
  }
  if (!valid0) {
    const err7 = {
      instancePath,
      schemaPath: '#/oneOf',
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
    validate20.errors = vErrors;
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
  validate20.errors = vErrors;
  evaluated0.props = props0;
  return errors === 0;
}
validate20.evaluated = { dynamicProps: true, dynamicItems: false };
export const validateContextData = validate21;
const schema32 = {
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
const schema33 = {
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
const schema34 = {
  type: 'object',
  properties: {
    hours: { oneOf: [{ type: 'number' }, { type: 'null' }] },
    minutes: { oneOf: [{ type: 'number' }, { type: 'null' }] },
  },
  required: ['hours', 'minutes'],
};
const schema36 = {
  type: 'object',
  properties: { fileId: { type: 'string' } },
  required: ['fileId'],
};
const schema35 = {
  type: 'object',
  properties: { id: { type: 'string' }, data: { $ref: '#' } },
  required: ['id', 'data'],
};
const root0 = { validate: validate21 };
function validate23(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  let vErrors = null;
  let errors = 0;
  const evaluated0 = validate23.evaluated;
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
        validate23.errors = [
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
            validate23.errors = [
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
      validate23.errors = [
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
  validate23.errors = vErrors;
  return errors === 0;
}
validate23.evaluated = {
  props: { id: true, data: true },
  dynamicProps: false,
  dynamicItems: false,
};
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
          !validate23(data[i0], {
            instancePath: instancePath + '/' + i0,
            parentData: data,
            parentDataProperty: i0,
            rootData,
            dynamicAnchors,
          })
        ) {
          vErrors = vErrors === null ? validate23.errors : vErrors.concat(validate23.errors);
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
    validate22.errors = vErrors;
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
  validate22.errors = vErrors;
  evaluated0.props = props0;
  evaluated0.items = items0;
  return errors === 0;
}
validate22.evaluated = { dynamicProps: true, dynamicItems: true };
function validate21(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/context-data/context-data.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate21.evaluated;
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
          !validate22(data[key0], {
            instancePath: instancePath + '/' + key0.replace(/~/g, '~0').replace(/\//g, '~1'),
            parentData: data,
            parentDataProperty: key0,
            rootData,
            dynamicAnchors,
          })
        ) {
          vErrors = vErrors === null ? validate22.errors : vErrors.concat(validate22.errors);
          errors = vErrors.length;
        }
        var valid0 = _errs2 === errors;
        if (!valid0) {
          break;
        }
      }
    } else {
      validate21.errors = [
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
  validate21.errors = vErrors;
  return errors === 0;
}
validate21.evaluated = { props: true, dynamicProps: false, dynamicItems: false };
export const validateHookRejectResult = validate26;
const schema37 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hook-reject-result/hook-reject-result.json',
  title: 'HookRejectResult',
  type: 'object',
  properties: { reject: { type: 'string' } },
  required: ['reject'],
};
function validate26(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hook-reject-result/hook-reject-result.json" */ let vErrors = null;
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
      if (data.reject === undefined && (missing0 = 'reject')) {
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
        if (data.reject !== undefined) {
          if (typeof data.reject !== 'string') {
            validate26.errors = [
              {
                instancePath: instancePath + '/reject',
                schemaPath: '#/properties/reject/type',
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
validate26.evaluated = { props: { reject: true }, dynamicProps: false, dynamicItems: false };
export const validateRequestContextSite = validate27;
const schema38 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/request-context/request-context-site.json',
  title: 'RequestContextSite',
  description: 'The site from which the request originated.',
  type: 'object',
  properties: { id: { type: 'string' }, domain: { type: 'string' } },
  required: ['id', 'domain'],
};
function validate27(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/request-context/request-context-site.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate27.evaluated;
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
        (data.domain === undefined && (missing0 = 'domain'))
      ) {
        validate27.errors = [
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
            validate27.errors = [
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
          if (data.domain !== undefined) {
            const _errs3 = errors;
            if (typeof data.domain !== 'string') {
              validate27.errors = [
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
        }
      }
    } else {
      validate27.errors = [
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
  validate27.errors = vErrors;
  return errors === 0;
}
validate27.evaluated = {
  props: { id: true, domain: true },
  dynamicProps: false,
  dynamicItems: false,
};
export const validateRequestContextUser = validate28;
const schema39 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/request-context/request-context-user.json',
  title: 'RequestContextUser',
  description: 'The user making the request.',
  type: 'object',
  properties: { id: { type: 'string' } },
  required: ['id'],
};
function validate28(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/request-context/request-context-user.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate28.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  if (errors === 0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (data.id === undefined && (missing0 = 'id')) {
        validate28.errors = [
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
          if (typeof data.id !== 'string') {
            validate28.errors = [
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
        }
      }
    } else {
      validate28.errors = [
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
  validate28.errors = vErrors;
  return errors === 0;
}
validate28.evaluated = { props: { id: true }, dynamicProps: false, dynamicItems: false };
export const validateAuthorizeCreateSiteContext = validate29;
const schema40 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/authorize-create-site/context.json',
  title: 'AuthorizeCreateSiteContext',
  type: 'object',
  properties: {
    input: {
      type: 'object',
      properties: { name: { type: 'string' }, domain: { type: 'string' } },
      required: ['name'],
    },
    user: { $ref: '../../request-context/request-context-user.json' },
    site: { $ref: '../../request-context/request-context-site.json' },
  },
  required: ['input', 'user', 'site'],
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
  if (errors === 0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (
        (data.input === undefined && (missing0 = 'input')) ||
        (data.user === undefined && (missing0 = 'user')) ||
        (data.site === undefined && (missing0 = 'site'))
      ) {
        validate29.errors = [
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
        if (data.input !== undefined) {
          let data0 = data.input;
          const _errs1 = errors;
          if (errors === _errs1) {
            if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
              let missing1;
              if (data0.name === undefined && (missing1 = 'name')) {
                validate29.errors = [
                  {
                    instancePath: instancePath + '/input',
                    schemaPath: '#/properties/input/required',
                    keyword: 'required',
                    params: { missingProperty: missing1 },
                    message: "must have required property '" + missing1 + "'",
                  },
                ];
                return false;
              } else {
                if (data0.name !== undefined) {
                  const _errs3 = errors;
                  if (typeof data0.name !== 'string') {
                    validate29.errors = [
                      {
                        instancePath: instancePath + '/input/name',
                        schemaPath: '#/properties/input/properties/name/type',
                        keyword: 'type',
                        params: { type: 'string' },
                        message: 'must be string',
                      },
                    ];
                    return false;
                  }
                  var valid1 = _errs3 === errors;
                } else {
                  var valid1 = true;
                }
                if (valid1) {
                  if (data0.domain !== undefined) {
                    const _errs5 = errors;
                    if (typeof data0.domain !== 'string') {
                      validate29.errors = [
                        {
                          instancePath: instancePath + '/input/domain',
                          schemaPath: '#/properties/input/properties/domain/type',
                          keyword: 'type',
                          params: { type: 'string' },
                          message: 'must be string',
                        },
                      ];
                      return false;
                    }
                    var valid1 = _errs5 === errors;
                  } else {
                    var valid1 = true;
                  }
                }
              }
            } else {
              validate29.errors = [
                {
                  instancePath: instancePath + '/input',
                  schemaPath: '#/properties/input/type',
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
          if (data.user !== undefined) {
            let data3 = data.user;
            const _errs7 = errors;
            const _errs8 = errors;
            if (errors === _errs8) {
              if (data3 && typeof data3 == 'object' && !Array.isArray(data3)) {
                let missing2;
                if (data3.id === undefined && (missing2 = 'id')) {
                  validate29.errors = [
                    {
                      instancePath: instancePath + '/user',
                      schemaPath: '../../request-context/request-context-user.json/required',
                      keyword: 'required',
                      params: { missingProperty: missing2 },
                      message: "must have required property '" + missing2 + "'",
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
                            '../../request-context/request-context-user.json/properties/id/type',
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
                    schemaPath: '../../request-context/request-context-user.json/type',
                    keyword: 'type',
                    params: { type: 'object' },
                    message: 'must be object',
                  },
                ];
                return false;
              }
            }
            var valid0 = _errs7 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.site !== undefined) {
              let data5 = data.site;
              const _errs12 = errors;
              const _errs13 = errors;
              if (errors === _errs13) {
                if (data5 && typeof data5 == 'object' && !Array.isArray(data5)) {
                  let missing3;
                  if (
                    (data5.id === undefined && (missing3 = 'id')) ||
                    (data5.domain === undefined && (missing3 = 'domain'))
                  ) {
                    validate29.errors = [
                      {
                        instancePath: instancePath + '/site',
                        schemaPath: '../../request-context/request-context-site.json/required',
                        keyword: 'required',
                        params: { missingProperty: missing3 },
                        message: "must have required property '" + missing3 + "'",
                      },
                    ];
                    return false;
                  } else {
                    if (data5.id !== undefined) {
                      const _errs15 = errors;
                      if (typeof data5.id !== 'string') {
                        validate29.errors = [
                          {
                            instancePath: instancePath + '/site/id',
                            schemaPath:
                              '../../request-context/request-context-site.json/properties/id/type',
                            keyword: 'type',
                            params: { type: 'string' },
                            message: 'must be string',
                          },
                        ];
                        return false;
                      }
                      var valid5 = _errs15 === errors;
                    } else {
                      var valid5 = true;
                    }
                    if (valid5) {
                      if (data5.domain !== undefined) {
                        const _errs17 = errors;
                        if (typeof data5.domain !== 'string') {
                          validate29.errors = [
                            {
                              instancePath: instancePath + '/site/domain',
                              schemaPath:
                                '../../request-context/request-context-site.json/properties/domain/type',
                              keyword: 'type',
                              params: { type: 'string' },
                              message: 'must be string',
                            },
                          ];
                          return false;
                        }
                        var valid5 = _errs17 === errors;
                      } else {
                        var valid5 = true;
                      }
                    }
                  }
                } else {
                  validate29.errors = [
                    {
                      instancePath: instancePath + '/site',
                      schemaPath: '../../request-context/request-context-site.json/type',
                      keyword: 'type',
                      params: { type: 'object' },
                      message: 'must be object',
                    },
                  ];
                  return false;
                }
              }
              var valid0 = _errs12 === errors;
            } else {
              var valid0 = true;
            }
          }
        }
      }
    } else {
      validate29.errors = [
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
  validate29.errors = vErrors;
  return errors === 0;
}
validate29.evaluated = {
  props: { input: true, user: true, site: true },
  dynamicProps: false,
  dynamicItems: false,
};
export const validateAuthorizeCreateSiteValue = validate30;
const schema43 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/authorize-create-site/value.json',
  title: 'AuthorizeCreateSiteValue',
  $ref: '../../authorize-hook-result/authorize-hook-result.json',
};
function validate30(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/authorize-create-site/value.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate30.evaluated;
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
    validate30.errors = vErrors;
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
  validate30.errors = vErrors;
  evaluated0.props = props0;
  return errors === 0;
}
validate30.evaluated = { dynamicProps: true, dynamicItems: false };
export const validateAuthorizeCreateSiteInput = validate31;
const schema45 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/authorize-create-site/input.json',
  title: 'AuthorizeCreateSiteInput',
  type: 'object',
  properties: { value: { $ref: './value.json' }, context: { $ref: './context.json' } },
  required: ['value', 'context'],
};
function validate31(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/authorize-create-site/input.json" */ let vErrors = null;
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
      if (
        (data.value === undefined && (missing0 = 'value')) ||
        (data.context === undefined && (missing0 = 'context'))
      ) {
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
            !validate30(data.value, {
              instancePath: instancePath + '/value',
              parentData: data,
              parentDataProperty: 'value',
              rootData,
              dynamicAnchors,
            })
          ) {
            vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
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
  props: { value: true, context: true },
  dynamicProps: false,
  dynamicItems: false,
};
export const validateAuthorizeCreateSiteResult = validate34;
const schema46 = {
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
function validate34(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/authorize-create-site/result.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate34.evaluated;
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
        validate34.errors = [
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
            !validate30(data.value, {
              instancePath: instancePath + '/value',
              parentData: data,
              parentDataProperty: 'value',
              rootData,
              dynamicAnchors,
            })
          ) {
            vErrors = vErrors === null ? validate30.errors : vErrors.concat(validate30.errors);
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
              validate34.errors = [
                {
                  instancePath: instancePath + '/stop',
                  schemaPath: '#/properties/stop/type',
                  keyword: 'type',
                  params: { type: schema46.properties.stop.type },
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
      validate34.errors = [
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
  validate34.errors = vErrors;
  return errors === 0;
}
validate34.evaluated = {
  props: { value: true, stop: true },
  dynamicProps: false,
  dynamicItems: false,
};
export const validateBeforeCreateSiteContext = validate36;
const schema47 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/before-create-site/context.json',
  title: 'BeforeCreateSiteContext',
  type: 'object',
  properties: {
    user: { $ref: '../../request-context/request-context-user.json' },
    site: { $ref: '../../request-context/request-context-site.json' },
  },
  required: ['user', 'site'],
};
function validate36(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/before-create-site/context.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate36.evaluated;
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
        (data.user === undefined && (missing0 = 'user')) ||
        (data.site === undefined && (missing0 = 'site'))
      ) {
        validate36.errors = [
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
        if (data.user !== undefined) {
          let data0 = data.user;
          const _errs1 = errors;
          const _errs2 = errors;
          if (errors === _errs2) {
            if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
              let missing1;
              if (data0.id === undefined && (missing1 = 'id')) {
                validate36.errors = [
                  {
                    instancePath: instancePath + '/user',
                    schemaPath: '../../request-context/request-context-user.json/required',
                    keyword: 'required',
                    params: { missingProperty: missing1 },
                    message: "must have required property '" + missing1 + "'",
                  },
                ];
                return false;
              } else {
                if (data0.id !== undefined) {
                  if (typeof data0.id !== 'string') {
                    validate36.errors = [
                      {
                        instancePath: instancePath + '/user/id',
                        schemaPath:
                          '../../request-context/request-context-user.json/properties/id/type',
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
                  schemaPath: '../../request-context/request-context-user.json/type',
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
          if (data.site !== undefined) {
            let data2 = data.site;
            const _errs6 = errors;
            const _errs7 = errors;
            if (errors === _errs7) {
              if (data2 && typeof data2 == 'object' && !Array.isArray(data2)) {
                let missing2;
                if (
                  (data2.id === undefined && (missing2 = 'id')) ||
                  (data2.domain === undefined && (missing2 = 'domain'))
                ) {
                  validate36.errors = [
                    {
                      instancePath: instancePath + '/site',
                      schemaPath: '../../request-context/request-context-site.json/required',
                      keyword: 'required',
                      params: { missingProperty: missing2 },
                      message: "must have required property '" + missing2 + "'",
                    },
                  ];
                  return false;
                } else {
                  if (data2.id !== undefined) {
                    const _errs9 = errors;
                    if (typeof data2.id !== 'string') {
                      validate36.errors = [
                        {
                          instancePath: instancePath + '/site/id',
                          schemaPath:
                            '../../request-context/request-context-site.json/properties/id/type',
                          keyword: 'type',
                          params: { type: 'string' },
                          message: 'must be string',
                        },
                      ];
                      return false;
                    }
                    var valid4 = _errs9 === errors;
                  } else {
                    var valid4 = true;
                  }
                  if (valid4) {
                    if (data2.domain !== undefined) {
                      const _errs11 = errors;
                      if (typeof data2.domain !== 'string') {
                        validate36.errors = [
                          {
                            instancePath: instancePath + '/site/domain',
                            schemaPath:
                              '../../request-context/request-context-site.json/properties/domain/type',
                            keyword: 'type',
                            params: { type: 'string' },
                            message: 'must be string',
                          },
                        ];
                        return false;
                      }
                      var valid4 = _errs11 === errors;
                    } else {
                      var valid4 = true;
                    }
                  }
                }
              } else {
                validate36.errors = [
                  {
                    instancePath: instancePath + '/site',
                    schemaPath: '../../request-context/request-context-site.json/type',
                    keyword: 'type',
                    params: { type: 'object' },
                    message: 'must be object',
                  },
                ];
                return false;
              }
            }
            var valid0 = _errs6 === errors;
          } else {
            var valid0 = true;
          }
        }
      }
    } else {
      validate36.errors = [
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
  validate36.errors = vErrors;
  return errors === 0;
}
validate36.evaluated = {
  props: { user: true, site: true },
  dynamicProps: false,
  dynamicItems: false,
};
export const validateBeforeCreateSiteValue = validate37;
const schema50 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/before-create-site/value.json',
  title: 'BeforeCreateSiteValue',
  type: 'object',
  properties: {
    name: { type: 'string' },
    domain: { type: 'string' },
    orgId: { type: 'string', description: 'The ID of the org that will own the site.' },
  },
  required: ['name'],
};
function validate37(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/before-create-site/value.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate37.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = undefined;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = undefined;
  }
  if (errors === 0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0;
      if (data.name === undefined && (missing0 = 'name')) {
        validate37.errors = [
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
            validate37.errors = [
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
              validate37.errors = [
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
                validate37.errors = [
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
          }
        }
      }
    } else {
      validate37.errors = [
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
  validate37.errors = vErrors;
  return errors === 0;
}
validate37.evaluated = {
  props: { name: true, domain: true, orgId: true },
  dynamicProps: false,
  dynamicItems: false,
};
export const validateBeforeCreateSiteInput = validate38;
const schema51 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/before-create-site/input.json',
  title: 'BeforeCreateSiteInput',
  type: 'object',
  properties: { value: { $ref: './value.json' }, context: { $ref: './context.json' } },
  required: ['value', 'context'],
};
function validate38(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/before-create-site/input.json" */ let vErrors = null;
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
      if (
        (data.value === undefined && (missing0 = 'value')) ||
        (data.context === undefined && (missing0 = 'context'))
      ) {
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
          let data0 = data.value;
          const _errs1 = errors;
          const _errs2 = errors;
          if (errors === _errs2) {
            if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
              let missing1;
              if (data0.name === undefined && (missing1 = 'name')) {
                validate38.errors = [
                  {
                    instancePath: instancePath + '/value',
                    schemaPath: './value.json/required',
                    keyword: 'required',
                    params: { missingProperty: missing1 },
                    message: "must have required property '" + missing1 + "'",
                  },
                ];
                return false;
              } else {
                if (data0.name !== undefined) {
                  const _errs4 = errors;
                  if (typeof data0.name !== 'string') {
                    validate38.errors = [
                      {
                        instancePath: instancePath + '/value/name',
                        schemaPath: './value.json/properties/name/type',
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
                  if (data0.domain !== undefined) {
                    const _errs6 = errors;
                    if (typeof data0.domain !== 'string') {
                      validate38.errors = [
                        {
                          instancePath: instancePath + '/value/domain',
                          schemaPath: './value.json/properties/domain/type',
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
                  if (valid2) {
                    if (data0.orgId !== undefined) {
                      const _errs8 = errors;
                      if (typeof data0.orgId !== 'string') {
                        validate38.errors = [
                          {
                            instancePath: instancePath + '/value/orgId',
                            schemaPath: './value.json/properties/orgId/type',
                            keyword: 'type',
                            params: { type: 'string' },
                            message: 'must be string',
                          },
                        ];
                        return false;
                      }
                      var valid2 = _errs8 === errors;
                    } else {
                      var valid2 = true;
                    }
                  }
                }
              }
            } else {
              validate38.errors = [
                {
                  instancePath: instancePath + '/value',
                  schemaPath: './value.json/type',
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
          if (data.context !== undefined) {
            const _errs10 = errors;
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
            var valid0 = _errs10 === errors;
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
  props: { value: true, context: true },
  dynamicProps: false,
  dynamicItems: false,
};
export const validateBeforeCreateSiteResult = validate40;
const schema53 = {
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
function validate40(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/before-create-site/result.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate40.evaluated;
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
          let data0 = data.value;
          const _errs3 = errors;
          const _errs4 = errors;
          if (errors === _errs4) {
            if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
              let missing1;
              if (data0.name === undefined && (missing1 = 'name')) {
                const err1 = {
                  instancePath: instancePath + '/value',
                  schemaPath: './value.json/required',
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
                if (data0.name !== undefined) {
                  const _errs6 = errors;
                  if (typeof data0.name !== 'string') {
                    const err2 = {
                      instancePath: instancePath + '/value/name',
                      schemaPath: './value.json/properties/name/type',
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
                  var valid3 = _errs6 === errors;
                } else {
                  var valid3 = true;
                }
                if (valid3) {
                  if (data0.domain !== undefined) {
                    const _errs8 = errors;
                    if (typeof data0.domain !== 'string') {
                      const err3 = {
                        instancePath: instancePath + '/value/domain',
                        schemaPath: './value.json/properties/domain/type',
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
                    var valid3 = _errs8 === errors;
                  } else {
                    var valid3 = true;
                  }
                  if (valid3) {
                    if (data0.orgId !== undefined) {
                      const _errs10 = errors;
                      if (typeof data0.orgId !== 'string') {
                        const err4 = {
                          instancePath: instancePath + '/value/orgId',
                          schemaPath: './value.json/properties/orgId/type',
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
                      var valid3 = _errs10 === errors;
                    } else {
                      var valid3 = true;
                    }
                  }
                }
              }
            } else {
              const err5 = {
                instancePath: instancePath + '/value',
                schemaPath: './value.json/type',
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
          var valid1 = _errs3 === errors;
        } else {
          var valid1 = true;
        }
        if (valid1) {
          if (data.stop !== undefined) {
            let data4 = data.stop;
            const _errs12 = errors;
            if (typeof data4 !== 'boolean' && data4 !== null) {
              const err6 = {
                instancePath: instancePath + '/stop',
                schemaPath: '#/oneOf/0/properties/stop/type',
                keyword: 'type',
                params: { type: schema53.oneOf[0].properties.stop.type },
                message: 'must be boolean,null',
              };
              if (vErrors === null) {
                vErrors = [err6];
              } else {
                vErrors.push(err6);
              }
              errors++;
            }
            var valid1 = _errs12 === errors;
          } else {
            var valid1 = true;
          }
        }
      }
    } else {
      const err7 = {
        instancePath,
        schemaPath: '#/oneOf/0/type',
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
  var _valid0 = _errs1 === errors;
  if (_valid0) {
    valid0 = true;
    passing0 = 0;
    var props0 = {};
    props0.value = true;
    props0.stop = true;
  }
  const _errs14 = errors;
  const _errs15 = errors;
  if (errors === _errs15) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing2;
      if (data.reject === undefined && (missing2 = 'reject')) {
        const err8 = {
          instancePath,
          schemaPath: '../../hook-reject-result/hook-reject-result.json/required',
          keyword: 'required',
          params: { missingProperty: missing2 },
          message: "must have required property '" + missing2 + "'",
        };
        if (vErrors === null) {
          vErrors = [err8];
        } else {
          vErrors.push(err8);
        }
        errors++;
      } else {
        if (data.reject !== undefined) {
          if (typeof data.reject !== 'string') {
            const err9 = {
              instancePath: instancePath + '/reject',
              schemaPath: '../../hook-reject-result/hook-reject-result.json/properties/reject/type',
              keyword: 'type',
              params: { type: 'string' },
              message: 'must be string',
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
    } else {
      const err10 = {
        instancePath,
        schemaPath: '../../hook-reject-result/hook-reject-result.json/type',
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
  var _valid0 = _errs14 === errors;
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
    validate40.errors = vErrors;
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
  validate40.errors = vErrors;
  evaluated0.props = props0;
  return errors === 0;
}
validate40.evaluated = { dynamicProps: true, dynamicItems: false };
export const validateBeforeSubmitFormContext = validate41;
const schema56 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/before-submit-form/context.json',
  title: 'BeforeSubmitFormContext',
  type: 'object',
  properties: {
    sessionId: { type: 'string' },
    stepId: { type: 'string' },
    finalStep: { type: 'boolean' },
    submitterIpAddress: { type: 'string' },
    form: { type: 'object', properties: { id: { type: 'string' } }, required: ['id'] },
    pageUrl: {
      description: 'The full URL of the page where the form is being shown.',
      type: 'string',
    },
    user: { $ref: '../../request-context/request-context-user.json' },
    site: { $ref: '../../request-context/request-context-site.json' },
  },
  required: ['sessionId', 'finalStep', 'form', 'pageUrl', 'site'],
};
function validate41(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/before-submit-form/context.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate41.evaluated;
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
        (data.sessionId === undefined && (missing0 = 'sessionId')) ||
        (data.finalStep === undefined && (missing0 = 'finalStep')) ||
        (data.form === undefined && (missing0 = 'form')) ||
        (data.pageUrl === undefined && (missing0 = 'pageUrl')) ||
        (data.site === undefined && (missing0 = 'site'))
      ) {
        validate41.errors = [
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
        if (data.sessionId !== undefined) {
          const _errs1 = errors;
          if (typeof data.sessionId !== 'string') {
            validate41.errors = [
              {
                instancePath: instancePath + '/sessionId',
                schemaPath: '#/properties/sessionId/type',
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
          if (data.stepId !== undefined) {
            const _errs3 = errors;
            if (typeof data.stepId !== 'string') {
              validate41.errors = [
                {
                  instancePath: instancePath + '/stepId',
                  schemaPath: '#/properties/stepId/type',
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
            if (data.finalStep !== undefined) {
              const _errs5 = errors;
              if (typeof data.finalStep !== 'boolean') {
                validate41.errors = [
                  {
                    instancePath: instancePath + '/finalStep',
                    schemaPath: '#/properties/finalStep/type',
                    keyword: 'type',
                    params: { type: 'boolean' },
                    message: 'must be boolean',
                  },
                ];
                return false;
              }
              var valid0 = _errs5 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.submitterIpAddress !== undefined) {
                const _errs7 = errors;
                if (typeof data.submitterIpAddress !== 'string') {
                  validate41.errors = [
                    {
                      instancePath: instancePath + '/submitterIpAddress',
                      schemaPath: '#/properties/submitterIpAddress/type',
                      keyword: 'type',
                      params: { type: 'string' },
                      message: 'must be string',
                    },
                  ];
                  return false;
                }
                var valid0 = _errs7 === errors;
              } else {
                var valid0 = true;
              }
              if (valid0) {
                if (data.form !== undefined) {
                  let data4 = data.form;
                  const _errs9 = errors;
                  if (errors === _errs9) {
                    if (data4 && typeof data4 == 'object' && !Array.isArray(data4)) {
                      let missing1;
                      if (data4.id === undefined && (missing1 = 'id')) {
                        validate41.errors = [
                          {
                            instancePath: instancePath + '/form',
                            schemaPath: '#/properties/form/required',
                            keyword: 'required',
                            params: { missingProperty: missing1 },
                            message: "must have required property '" + missing1 + "'",
                          },
                        ];
                        return false;
                      } else {
                        if (data4.id !== undefined) {
                          if (typeof data4.id !== 'string') {
                            validate41.errors = [
                              {
                                instancePath: instancePath + '/form/id',
                                schemaPath: '#/properties/form/properties/id/type',
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
                      validate41.errors = [
                        {
                          instancePath: instancePath + '/form',
                          schemaPath: '#/properties/form/type',
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
                  if (data.pageUrl !== undefined) {
                    const _errs13 = errors;
                    if (typeof data.pageUrl !== 'string') {
                      validate41.errors = [
                        {
                          instancePath: instancePath + '/pageUrl',
                          schemaPath: '#/properties/pageUrl/type',
                          keyword: 'type',
                          params: { type: 'string' },
                          message: 'must be string',
                        },
                      ];
                      return false;
                    }
                    var valid0 = _errs13 === errors;
                  } else {
                    var valid0 = true;
                  }
                  if (valid0) {
                    if (data.user !== undefined) {
                      let data7 = data.user;
                      const _errs15 = errors;
                      const _errs16 = errors;
                      if (errors === _errs16) {
                        if (data7 && typeof data7 == 'object' && !Array.isArray(data7)) {
                          let missing2;
                          if (data7.id === undefined && (missing2 = 'id')) {
                            validate41.errors = [
                              {
                                instancePath: instancePath + '/user',
                                schemaPath:
                                  '../../request-context/request-context-user.json/required',
                                keyword: 'required',
                                params: { missingProperty: missing2 },
                                message: "must have required property '" + missing2 + "'",
                              },
                            ];
                            return false;
                          } else {
                            if (data7.id !== undefined) {
                              if (typeof data7.id !== 'string') {
                                validate41.errors = [
                                  {
                                    instancePath: instancePath + '/user/id',
                                    schemaPath:
                                      '../../request-context/request-context-user.json/properties/id/type',
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
                          validate41.errors = [
                            {
                              instancePath: instancePath + '/user',
                              schemaPath: '../../request-context/request-context-user.json/type',
                              keyword: 'type',
                              params: { type: 'object' },
                              message: 'must be object',
                            },
                          ];
                          return false;
                        }
                      }
                      var valid0 = _errs15 === errors;
                    } else {
                      var valid0 = true;
                    }
                    if (valid0) {
                      if (data.site !== undefined) {
                        let data9 = data.site;
                        const _errs20 = errors;
                        const _errs21 = errors;
                        if (errors === _errs21) {
                          if (data9 && typeof data9 == 'object' && !Array.isArray(data9)) {
                            let missing3;
                            if (
                              (data9.id === undefined && (missing3 = 'id')) ||
                              (data9.domain === undefined && (missing3 = 'domain'))
                            ) {
                              validate41.errors = [
                                {
                                  instancePath: instancePath + '/site',
                                  schemaPath:
                                    '../../request-context/request-context-site.json/required',
                                  keyword: 'required',
                                  params: { missingProperty: missing3 },
                                  message: "must have required property '" + missing3 + "'",
                                },
                              ];
                              return false;
                            } else {
                              if (data9.id !== undefined) {
                                const _errs23 = errors;
                                if (typeof data9.id !== 'string') {
                                  validate41.errors = [
                                    {
                                      instancePath: instancePath + '/site/id',
                                      schemaPath:
                                        '../../request-context/request-context-site.json/properties/id/type',
                                      keyword: 'type',
                                      params: { type: 'string' },
                                      message: 'must be string',
                                    },
                                  ];
                                  return false;
                                }
                                var valid5 = _errs23 === errors;
                              } else {
                                var valid5 = true;
                              }
                              if (valid5) {
                                if (data9.domain !== undefined) {
                                  const _errs25 = errors;
                                  if (typeof data9.domain !== 'string') {
                                    validate41.errors = [
                                      {
                                        instancePath: instancePath + '/site/domain',
                                        schemaPath:
                                          '../../request-context/request-context-site.json/properties/domain/type',
                                        keyword: 'type',
                                        params: { type: 'string' },
                                        message: 'must be string',
                                      },
                                    ];
                                    return false;
                                  }
                                  var valid5 = _errs25 === errors;
                                } else {
                                  var valid5 = true;
                                }
                              }
                            }
                          } else {
                            validate41.errors = [
                              {
                                instancePath: instancePath + '/site',
                                schemaPath: '../../request-context/request-context-site.json/type',
                                keyword: 'type',
                                params: { type: 'object' },
                                message: 'must be object',
                              },
                            ];
                            return false;
                          }
                        }
                        var valid0 = _errs20 === errors;
                      } else {
                        var valid0 = true;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    } else {
      validate41.errors = [
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
  validate41.errors = vErrors;
  return errors === 0;
}
validate41.evaluated = {
  props: {
    sessionId: true,
    stepId: true,
    finalStep: true,
    submitterIpAddress: true,
    form: true,
    pageUrl: true,
    user: true,
    site: true,
  },
  dynamicProps: false,
  dynamicItems: false,
};
export const validateBeforeSubmitFormValue = validate42;
const schema59 = {
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
function validate42(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/before-submit-form/value.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate42.evaluated;
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
        validate42.errors = [
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
            !validate21(data.formData, {
              instancePath: instancePath + '/formData',
              parentData: data,
              parentDataProperty: 'formData',
              rootData,
              dynamicAnchors,
            })
          ) {
            vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
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
              validate42.errors = [
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
      validate42.errors = [
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
  validate42.errors = vErrors;
  return errors === 0;
}
validate42.evaluated = {
  props: { formData: true, saveToDatabase: true },
  dynamicProps: false,
  dynamicItems: false,
};
export const validateBeforeSubmitFormInput = validate44;
const schema60 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/before-submit-form/input.json',
  title: 'BeforeSubmitFormInput',
  type: 'object',
  properties: { value: { $ref: './value.json' }, context: { $ref: './context.json' } },
  required: ['value', 'context'],
};
function validate44(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/before-submit-form/input.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate44.evaluated;
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
        validate44.errors = [
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
            !validate42(data.value, {
              instancePath: instancePath + '/value',
              parentData: data,
              parentDataProperty: 'value',
              rootData,
              dynamicAnchors,
            })
          ) {
            vErrors = vErrors === null ? validate42.errors : vErrors.concat(validate42.errors);
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
              !validate41(data.context, {
                instancePath: instancePath + '/context',
                parentData: data,
                parentDataProperty: 'context',
                rootData,
                dynamicAnchors,
              })
            ) {
              vErrors = vErrors === null ? validate41.errors : vErrors.concat(validate41.errors);
              errors = vErrors.length;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
        }
      }
    } else {
      validate44.errors = [
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
  validate44.errors = vErrors;
  return errors === 0;
}
validate44.evaluated = {
  props: { value: true, context: true },
  dynamicProps: false,
  dynamicItems: false,
};
export const validateBeforeSubmitFormResult = validate47;
const schema61 = {
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
function validate47(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/before-submit-form/result.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate47.evaluated;
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
            !validate42(data.value, {
              instancePath: instancePath + '/value',
              parentData: data,
              parentDataProperty: 'value',
              rootData,
              dynamicAnchors,
            })
          ) {
            vErrors = vErrors === null ? validate42.errors : vErrors.concat(validate42.errors);
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
                params: { type: schema61.oneOf[0].properties.stop.type },
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
    validate47.errors = vErrors;
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
  validate47.errors = vErrors;
  evaluated0.props = props0;
  return errors === 0;
}
validate47.evaluated = { dynamicProps: true, dynamicItems: false };
export const validateInitialFormDataContext = validate49;
const schema63 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/initial-form-data/context.json',
  title: 'InitialFormDataContext',
  type: 'object',
  properties: {
    form: { type: 'object', properties: { id: { type: 'string' } }, required: ['id'] },
    pageUrl: {
      description: 'The full URL of the page where the form is being shown.',
      type: 'string',
    },
    user: { $ref: '../../request-context/request-context-user.json' },
    site: { $ref: '../../request-context/request-context-site.json' },
  },
  required: ['form', 'pageUrl', 'site'],
};
function validate49(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/initial-form-data/context.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate49.evaluated;
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
        (data.form === undefined && (missing0 = 'form')) ||
        (data.pageUrl === undefined && (missing0 = 'pageUrl')) ||
        (data.site === undefined && (missing0 = 'site'))
      ) {
        validate49.errors = [
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
        if (data.form !== undefined) {
          let data0 = data.form;
          const _errs1 = errors;
          if (errors === _errs1) {
            if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
              let missing1;
              if (data0.id === undefined && (missing1 = 'id')) {
                validate49.errors = [
                  {
                    instancePath: instancePath + '/form',
                    schemaPath: '#/properties/form/required',
                    keyword: 'required',
                    params: { missingProperty: missing1 },
                    message: "must have required property '" + missing1 + "'",
                  },
                ];
                return false;
              } else {
                if (data0.id !== undefined) {
                  if (typeof data0.id !== 'string') {
                    validate49.errors = [
                      {
                        instancePath: instancePath + '/form/id',
                        schemaPath: '#/properties/form/properties/id/type',
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
              validate49.errors = [
                {
                  instancePath: instancePath + '/form',
                  schemaPath: '#/properties/form/type',
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
          if (data.pageUrl !== undefined) {
            const _errs5 = errors;
            if (typeof data.pageUrl !== 'string') {
              validate49.errors = [
                {
                  instancePath: instancePath + '/pageUrl',
                  schemaPath: '#/properties/pageUrl/type',
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
            if (data.user !== undefined) {
              let data3 = data.user;
              const _errs7 = errors;
              const _errs8 = errors;
              if (errors === _errs8) {
                if (data3 && typeof data3 == 'object' && !Array.isArray(data3)) {
                  let missing2;
                  if (data3.id === undefined && (missing2 = 'id')) {
                    validate49.errors = [
                      {
                        instancePath: instancePath + '/user',
                        schemaPath: '../../request-context/request-context-user.json/required',
                        keyword: 'required',
                        params: { missingProperty: missing2 },
                        message: "must have required property '" + missing2 + "'",
                      },
                    ];
                    return false;
                  } else {
                    if (data3.id !== undefined) {
                      if (typeof data3.id !== 'string') {
                        validate49.errors = [
                          {
                            instancePath: instancePath + '/user/id',
                            schemaPath:
                              '../../request-context/request-context-user.json/properties/id/type',
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
                  validate49.errors = [
                    {
                      instancePath: instancePath + '/user',
                      schemaPath: '../../request-context/request-context-user.json/type',
                      keyword: 'type',
                      params: { type: 'object' },
                      message: 'must be object',
                    },
                  ];
                  return false;
                }
              }
              var valid0 = _errs7 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.site !== undefined) {
                let data5 = data.site;
                const _errs12 = errors;
                const _errs13 = errors;
                if (errors === _errs13) {
                  if (data5 && typeof data5 == 'object' && !Array.isArray(data5)) {
                    let missing3;
                    if (
                      (data5.id === undefined && (missing3 = 'id')) ||
                      (data5.domain === undefined && (missing3 = 'domain'))
                    ) {
                      validate49.errors = [
                        {
                          instancePath: instancePath + '/site',
                          schemaPath: '../../request-context/request-context-site.json/required',
                          keyword: 'required',
                          params: { missingProperty: missing3 },
                          message: "must have required property '" + missing3 + "'",
                        },
                      ];
                      return false;
                    } else {
                      if (data5.id !== undefined) {
                        const _errs15 = errors;
                        if (typeof data5.id !== 'string') {
                          validate49.errors = [
                            {
                              instancePath: instancePath + '/site/id',
                              schemaPath:
                                '../../request-context/request-context-site.json/properties/id/type',
                              keyword: 'type',
                              params: { type: 'string' },
                              message: 'must be string',
                            },
                          ];
                          return false;
                        }
                        var valid5 = _errs15 === errors;
                      } else {
                        var valid5 = true;
                      }
                      if (valid5) {
                        if (data5.domain !== undefined) {
                          const _errs17 = errors;
                          if (typeof data5.domain !== 'string') {
                            validate49.errors = [
                              {
                                instancePath: instancePath + '/site/domain',
                                schemaPath:
                                  '../../request-context/request-context-site.json/properties/domain/type',
                                keyword: 'type',
                                params: { type: 'string' },
                                message: 'must be string',
                              },
                            ];
                            return false;
                          }
                          var valid5 = _errs17 === errors;
                        } else {
                          var valid5 = true;
                        }
                      }
                    }
                  } else {
                    validate49.errors = [
                      {
                        instancePath: instancePath + '/site',
                        schemaPath: '../../request-context/request-context-site.json/type',
                        keyword: 'type',
                        params: { type: 'object' },
                        message: 'must be object',
                      },
                    ];
                    return false;
                  }
                }
                var valid0 = _errs12 === errors;
              } else {
                var valid0 = true;
              }
            }
          }
        }
      }
    } else {
      validate49.errors = [
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
  validate49.errors = vErrors;
  return errors === 0;
}
validate49.evaluated = {
  props: { form: true, pageUrl: true, user: true, site: true },
  dynamicProps: false,
  dynamicItems: false,
};
export const validateInitialFormDataValue = validate50;
const schema66 = {
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
function validate50(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/initial-form-data/value.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate50.evaluated;
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
        validate50.errors = [
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
            !validate21(data.formData, {
              instancePath: instancePath + '/formData',
              parentData: data,
              parentDataProperty: 'formData',
              rootData,
              dynamicAnchors,
            })
          ) {
            vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
            errors = vErrors.length;
          }
        }
      }
    } else {
      validate50.errors = [
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
  validate50.errors = vErrors;
  return errors === 0;
}
validate50.evaluated = { props: { formData: true }, dynamicProps: false, dynamicItems: false };
export const validateInitialFormDataInput = validate52;
const schema67 = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: '/hooks/initial-form-data/input.json',
  title: 'InitialFormDataInput',
  type: 'object',
  properties: { value: { $ref: './value.json' }, context: { $ref: './context.json' } },
  required: ['value', 'context'],
};
function validate52(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/initial-form-data/input.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate52.evaluated;
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
        validate52.errors = [
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
            !validate50(data.value, {
              instancePath: instancePath + '/value',
              parentData: data,
              parentDataProperty: 'value',
              rootData,
              dynamicAnchors,
            })
          ) {
            vErrors = vErrors === null ? validate50.errors : vErrors.concat(validate50.errors);
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
              !validate49(data.context, {
                instancePath: instancePath + '/context',
                parentData: data,
                parentDataProperty: 'context',
                rootData,
                dynamicAnchors,
              })
            ) {
              vErrors = vErrors === null ? validate49.errors : vErrors.concat(validate49.errors);
              errors = vErrors.length;
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
        }
      }
    } else {
      validate52.errors = [
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
  validate52.errors = vErrors;
  return errors === 0;
}
validate52.evaluated = {
  props: { value: true, context: true },
  dynamicProps: false,
  dynamicItems: false,
};
export const validateInitialFormDataResult = validate55;
const schema68 = {
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
function validate55(
  data,
  { instancePath = '', parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {},
) {
  /*# sourceURL="/hooks/initial-form-data/result.json" */ let vErrors = null;
  let errors = 0;
  const evaluated0 = validate55.evaluated;
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
            !validate50(data.value, {
              instancePath: instancePath + '/value',
              parentData: data,
              parentDataProperty: 'value',
              rootData,
              dynamicAnchors,
            })
          ) {
            vErrors = vErrors === null ? validate50.errors : vErrors.concat(validate50.errors);
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
    validate55.errors = vErrors;
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
  validate55.errors = vErrors;
  evaluated0.props = props0;
  return errors === 0;
}
validate55.evaluated = { dynamicProps: true, dynamicItems: false };
